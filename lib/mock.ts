import { AnalysisResult } from "@/lib/types";

export const MOCK_RESULT: AnalysisResult = {
  analysis_mode: "mock",
  candidate_summary:
    "The candidate is a recent international graduate with relevant internship experience in business analysis, reporting, stakeholder communication, and testing support. The profile shows solid potential for an entry-level Business Analyst role in Australia, especially where structured documentation, teamwork, and reporting are important.",
  target_role: "Junior Business Analyst",
  match_score: 78,
  strengths: [
    "Relevant degree in Business Information Systems",
    "Hands-on internship exposure to requirements gathering",
    "Experience supporting reporting and dashboards",
    "Cross-functional collaboration with developers and QA",
    "Clear evidence of teamwork and presentation skills"
  ],
  missing_skills: [
    "Limited evidence of formal process mapping",
    "Limited detail on SQL proficiency",
    "No direct evidence of Australian workplace experience",
    "Achievements are not yet quantified with measurable outcomes"
  ],
  transferable_skills: [
    "Stakeholder communication",
    "Requirements documentation",
    "Reporting and dashboard support",
    "Testing coordination",
    "Team collaboration"
  ],
  australian_resume_summary:
    "Entry-level Business Analyst with a background in Business Information Systems and internship experience supporting requirements gathering, reporting, testing, and stakeholder communication. Demonstrates strong analytical thinking, documentation capability, and cross-functional collaboration, with a strong interest in contributing to business process improvement in the Australian market.",
  rewritten_bullets: [
    "Supported requirements gathering activities by documenting stakeholder needs, meeting outcomes, and functional updates for internal delivery teams.",
    "Prepared and maintained Excel-based performance reports and dashboards to assist weekly business tracking and decision-making.",
    "Coordinated with development and QA teams to support feature updates, testing readiness, and issue tracking prior to release.",
    "Contributed to a customer service improvement project by analysing feedback data, identifying workflow pain points, and presenting practical recommendations."
  ],
  interview_questions: [
    {
      question:
        "Can you describe a time when you gathered requirements from stakeholders with different expectations?",
      why_it_matters:
        "This assesses communication, analysis, and stakeholder management capability.",
      suggested_answer_points: [
        "Explain the context and stakeholders involved",
        "Describe how you clarified conflicting needs",
        "Show how you documented or prioritised requirements",
        "Mention the outcome or lesson learned"
      ]
    },
    {
      question:
        "How have you used reporting or dashboards to support decision-making?",
      why_it_matters:
        "This tests analytical thinking and ability to communicate insights through data.",
      suggested_answer_points: [
        "Describe the reporting tool used",
        "Explain what data was tracked",
        "Show how the report supported action or visibility",
        "Mention improvements or efficiencies created"
      ]
    },
    {
      question:
        "Tell us about a time you worked with a technical team to support delivery.",
      why_it_matters:
        "This helps evaluate collaboration with developers, QA, or implementation teams.",
      suggested_answer_points: [
        "Outline your role in the project",
        "Explain how you communicated requirements or issues",
        "Mention any documentation, testing, or follow-up support",
        "Show the final result"
      ]
    }
  ],
  action_plan_30_days: [
    {
      week: "Week 1",
      goals: [
        "Revise CV using Australian-style summary and quantified bullet points",
        "Tailor CV to one target Business Analyst job description",
        "Create a LinkedIn headline aligned to Business Analyst roles in Australia"
      ]
    },
    {
      week: "Week 2",
      goals: [
        "Strengthen SQL and Power BI fundamentals through short practice modules",
        "Prepare STAR stories for 5 common interview questions",
        "Research Australian expectations for business analysis and stakeholder communication"
      ]
    },
    {
      week: "Week 3",
      goals: [
        "Apply to 10 relevant entry-level roles with tailored CV versions",
        "Attend one networking or university career event",
        "Ask a mentor or peer to review communication style and CV clarity"
      ]
    },
    {
      week: "Week 4",
      goals: [
        "Complete one mini portfolio project showing process analysis or dashboard reporting",
        "Practice mock interviews focused on business analysis scenarios",
        "Refine application messaging based on employer feedback or self-review"
      ]
    }
  ],
  responsible_ai_notes: [
    "This tool provides employability support only and does not make hiring decisions.",
    "Recommendations are based on the text provided and may miss context not included in the CV or job description.",
    "Users should review and edit all generated resume content before submitting applications.",
    "The system should not use protected attributes such as nationality, ethnicity, gender, age, or religion in decision-making."
  ]
};
