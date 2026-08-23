"use client";

import { useState } from "react";
import { AnalysisResult } from "@/lib/types";
import { SAMPLE_CV, SAMPLE_JD } from "@/lib/sample";

export default function HomePage() {
  const [cvText, setCvText] = useState("");
  const [jdText, setJdText] = useState("");
  const [loading, setLoading] = useState(false);
  const [useMock, setUseMock] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");

  const loadSample = () => {
    setCvText(SAMPLE_CV);
    setJdText(SAMPLE_JD);
  };

  const clearAll = () => {
    setCvText("");
    setJdText("");
    setResult(null);
    setError("");
  };

  const handleAnalyze = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ cvText, jdText, useMock })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setResult(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to analyze");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <section className="mb-8">
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white shadow-lg">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-sm">
                  Futura Remix Hackathon MVP
                </p>
                <h1 className="text-4xl font-bold tracking-tight">BridgeAU AI</h1>
                <p className="mt-3 max-w-3xl text-slate-200">
                  Translate international talent into Australian job-readiness.
                  Analyze CVs, compare with Australian job descriptions, identify
                  skill gaps, rewrite resume content, and generate interview prep.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 text-sm">
                <p className="font-semibold">Responsible AI</p>
                <p className="mt-1 text-slate-200">
                  This tool supports employability preparation only. It does not
                  make hiring decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6 grid gap-4 lg:grid-cols-3">
          <StatCard title="Primary User" value="International students & skilled migrants" />
          <StatCard title="Core Outcome" value="Better job-readiness in Australia" />
          <StatCard title="Selected Mode" value={useMock ? "Mock Demo Mode" : "Live AI Mode"} />
        </section>

        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Profile Analysis</h2>
              <p className="mt-1 text-slate-600">
                Paste a candidate CV and target job description to generate an employability analysis.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={loadSample}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
              >
                Load Sample Data
              </button>
              <button
                onClick={clearAll}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
              >
                Clear
              </button>
            </div>
          </div>

          <div className="mb-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <input
              id="mockMode"
              type="checkbox"
              checked={useMock}
              onChange={(e) => setUseMock(e.target.checked)}
              className="h-4 w-4"
            />
            <label htmlFor="mockMode" className="text-sm text-slate-700">
              Use Mock Mode for stable demo without API key
            </label>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                Candidate CV
              </label>
              <textarea
                value={cvText}
                onChange={(e) => setCvText(e.target.value)}
                placeholder="Paste the candidate CV text here..."
                className="h-96 w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                Target Job Description
              </label>
              <textarea
                value={jdText}
                onChange={(e) => setJdText(e.target.value)}
                placeholder="Paste the target Australian job description here..."
                className="h-96 w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleAnalyze}
              disabled={loading || !cvText.trim() || !jdText.trim()}
              className="rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Analyze Profile"}
            </button>
          </div>

          {error && (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
              {error}
            </div>
          )}
        </section>

        {result && (
          <section className="mt-8 space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <ResultMetric
                title="Target Role"
                value={result.target_role}
                accent="blue"
              />
              <ResultMetric
                title="Match Score"
                value={`${result.match_score}/100`}
                accent="green"
              />
              <ResultMetric
                title="Analysis Type"
                value={result.analysis_mode === "live"
      ? "Live AI Output"
      : "Mock Demo Output"}
                accent="amber"
              />
            </div>

            <ResultCard title="Candidate Summary">
              <p className="leading-7 text-slate-700">{result.candidate_summary}</p>
            </ResultCard>

            <div className="grid gap-6 lg:grid-cols-3">
              <ListCard title="Strengths" items={result.strengths} />
              <ListCard title="Missing Skills" items={result.missing_skills} />
              <ListCard
                title="Transferable Skills"
                items={result.transferable_skills}
              />
            </div>

            <ResultCard title="Australian Resume Summary">
              <p className="leading-7 text-slate-700">
                {result.australian_resume_summary}
              </p>
            </ResultCard>

            <ResultCard title="Rewritten Resume Bullet Points">
              <ul className="list-disc space-y-2 pl-6 text-slate-700">
                {result.rewritten_bullets.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </ResultCard>

            <ResultCard title="Interview Questions">
              <div className="space-y-4">
                {result.interview_questions.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 p-4">
                    <p className="font-semibold text-slate-900">{item.question}</p>
                    <p className="mt-2 text-sm text-slate-600">{item.why_it_matters}</p>
                    <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-slate-700">
                      {item.suggested_answer_points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ResultCard>

            <ResultCard title="30-Day Action Plan">
              <div className="grid gap-4 lg:grid-cols-2">
                {result.action_plan_30_days.map((week, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="font-semibold text-slate-900">{week.week}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-700">
                      {week.goals.map((goal, i) => (
                        <li key={i}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ResultCard>

            <ResultCard title="Responsible AI Notes">
              <ul className="list-disc space-y-2 pl-6 text-slate-700">
                {result.responsible_ai_notes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </ResultCard>
          </section>
        )}
      </div>
    </main>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function ResultMetric({
  title,
  value,
  accent
}: {
  title: string;
  value: string;
  accent: "blue" | "green" | "amber";
}) {
  const classes = {
    blue: "bg-blue-50 text-blue-900 border-blue-200",
    green: "bg-emerald-50 text-emerald-900 border-emerald-200",
    amber: "bg-amber-50 text-amber-900 border-amber-200"
  };

  return (
    <div className={`rounded-2xl border p-5 ${classes[accent]}`}>
      <p className="text-sm font-medium opacity-80">{title}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
}

function ResultCard({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold text-slate-900">{title}</h3>
      {children}
    </div>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold text-slate-900">{title}</h3>
      <ul className="list-disc space-y-2 pl-6 text-slate-700">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
