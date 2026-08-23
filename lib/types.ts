export type InterviewQuestion = {
  question: string;
  why_it_matters: string;
  suggested_answer_points: string[];
};

export type ActionWeek = {
  week: string;
  goals: string[];
};

export type AnalysisResult = {
  candidate_summary: string;
  target_role: string;
  match_score: number;
  strengths: string[];
  missing_skills: string[];
  transferable_skills: string[];
  australian_resume_summary: string;
  rewritten_bullets: string[];
  interview_questions: InterviewQuestion[];
  action_plan_30_days: ActionWeek[];
  responsible_ai_notes: string[];
  analysis_mode: "live" | "mock";
};
