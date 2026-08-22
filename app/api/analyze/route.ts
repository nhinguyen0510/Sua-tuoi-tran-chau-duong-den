import { NextRequest, NextResponse } from "next/server";
import { getOpenAIClient } from "@/lib/openai";
import { MOCK_RESULT } from "@/lib/mock";
import { SYSTEM_PROMPT, buildUserPrompt } from "@/lib/prompt";
import { extractTextFromPdf } from "@/lib/pdf";

async function fileToText(file: File | null): Promise<string> {
  if (!file || file.size === 0) return "";

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const text = await extractTextFromPdf(buffer);
  return text.trim();
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let cvText = "";
    let jdText = "";
    let useMock = false;

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();

      const cvFile = formData.get("cvFile") as File | null;
      const jdFile = formData.get("jdFile") as File | null;

      const cvTextInput = formData.get("cvText");
      const jdTextInput = formData.get("jdText");
      const mockValue = formData.get("useMock");

      useMock = mockValue === "true";

      const parsedCvText = await fileToText(cvFile);
      const parsedJdText = await fileToText(jdFile);

      cvText =
        parsedCvText ||
        (typeof cvTextInput === "string" ? cvTextInput.trim() : "");

      jdText =
        parsedJdText ||
        (typeof jdTextInput === "string" ? jdTextInput.trim() : "");
    } else {
      const body = await req.json();
      cvText = (body.cvText || "").trim();
      jdText = (body.jdText || "").trim();
      useMock = !!body.useMock;
    }

    if (!cvText) {
      return NextResponse.json(
        { error: "CV input is required. Upload a PDF or paste CV text." },
        { status: 400 }
      );
    }

    if (!jdText) {
      return NextResponse.json(
        {
          error:
            "Job Description input is required. Upload a PDF or paste JD text."
        },
        { status: 400 }
      );
    }

    if (useMock || !process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        ...MOCK_RESULT,
        candidate_summary:
          MOCK_RESULT.candidate_summary +
          " (Mock mode enabled for demo purposes.)"
      });
    }

    const client = getOpenAIClient();

    if (!client) {
      return NextResponse.json(MOCK_RESULT);
    }

    const response = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      temperature: 0.3,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: buildUserPrompt(cvText, jdText)
        }
      ]
    });

    const content = response.choices[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: "No response from model" },
        { status: 500 }
      );
    }

    return NextResponse.json(JSON.parse(content));
  } catch (error) {
    console.error("Analyze API error:", error);
    return NextResponse.json(
      { error: "Failed to analyze candidate profile or job description PDF" },
      { status: 500 }
    );
  }
}
