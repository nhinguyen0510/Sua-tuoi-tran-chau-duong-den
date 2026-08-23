import { NextRequest, NextResponse } from "next/server";
import { analyzeProfileWithGemini } from "@/lib/gemini";
import { MOCK_RESULT } from "@/lib/mock";

export async function POST(req: NextRequest) {
  try {
    const { cvText, jdText, useMock = false } = await req.json();

    if (
      typeof cvText !== "string" ||
      typeof jdText !== "string" ||
      !cvText.trim() ||
      !jdText.trim()
    ) {
      return NextResponse.json(
        {
          error: "CV and Job Description are required."
        },
        {
          status: 400
        }
      );
    }

    // Chỉ dùng mock khi người dùng chủ động bật Mock Mode
    if (useMock === true) {
      return NextResponse.json({
        ...MOCK_RESULT,
        analysis_mode: "mock"
      });
    }

    // Mock OFF => bắt buộc gọi Gemini thật
    const result = await analyzeProfileWithGemini(
      cvText.trim(),
      jdText.trim()
    );

    return NextResponse.json({
      ...result,
      analysis_mode: "live"
    });
  } catch (error) {
    console.error("Analyze API error:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Unknown AI analysis error.";

    return NextResponse.json(
      {
        error: `Gemini analysis failed: ${message}`
      },
      {
        status: 500
      }
    );
  }
}
