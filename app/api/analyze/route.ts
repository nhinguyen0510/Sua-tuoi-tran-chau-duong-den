import { NextRequest, NextResponse } from "next/server";
import { getOpenAIClient } from "@/lib/openai";
import { MOCK_RESULT } from "@/lib/mock";
import { SYSTEM_PROMPT, buildUserPrompt } from "@/lib/prompt";

export async function POST(req: NextRequest) {
  try {
    const { cvText, jdText, useMock } = await req.json();

    if (!cvText || !jdText) {
      return NextResponse.json(
        { error: "cvText and jdText are required" },
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
      { error: "Failed to analyze candidate profile" },
      { status: 500 }
    );
  }
}
