import { GoogleGenAI, Type } from "@google/genai";

export async function analyzeProfileWithGemini(cvText: string, jobDescription: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `You are an expert HR recruiter and career coach in Australia. Analyze the Candidate CV against the Target Job Description.

  [Candidate CV]
  ${cvText}

  [Target Job Description]
  ${jobDescription}`;

  const response = await ai.models.generateContent({
    model: 'gemini-3.6-flash',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          target_role: { type: Type.STRING },
          match_score: { type: Type.INTEGER },
          candidate_summary: { type: Type.STRING },
          strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
          missing_skills: { type: Type.ARRAY, items: { type: Type.STRING } },
          transferable_skills: { type: Type.ARRAY, items: { type: Type.STRING } },
          australian_resume_summary: { type: Type.STRING },
          rewritten_bullets: { type: Type.ARRAY, items: { type: Type.STRING } },
          interview_questions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                why_it_matters: { type: Type.STRING },
                suggested_answer_points: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["question", "why_it_matters", "suggested_answer_points"]
            }
          },
          action_plan_30_days: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                week: { type: Type.STRING },
                goals: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["week", "goals"]
            }
          },
          responsible_ai_notes: { type: Type.ARRAY, items: { type: Type.STRING } }
        },
        required: [
          "target_role",
          "match_score",
          "candidate_summary",
          "strengths",
          "missing_skills",
          "transferable_skills",
          "australian_resume_summary",
          "rewritten_bullets",
          "interview_questions",
          "action_plan_30_days",
          "responsible_ai_notes"
        ],
      },
    }
  });

  return JSON.parse(response.text || "{}");
}