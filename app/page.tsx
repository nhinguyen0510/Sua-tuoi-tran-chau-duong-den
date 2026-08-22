import Link from "next/link";

const stats = [
  { value: "680K+", label: "International students in Australia" },
  { value: "69%", label: "Employers struggle to find the right skills" },
  { value: "92%", label: "Tech leaders say AI skills are essential" },
];

const features = [
  {
    title: "Translate Experience",
    desc: "Convert international study and work experience into language Australian employers understand.",
  },
  {
    title: "Match to Roles",
    desc: "Compare a CV against a target job description and highlight strengths, gaps, and transferable skills.",
  },
  {
    title: "Prepare with Confidence",
    desc: "Generate interview questions, resume improvements, and a realistic 30-day action plan.",
  },
];

const steps = [
  "Paste your CV or profile",
  "Add a target Australian job description",
  "Get AI-powered employability insights instantly",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071129] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(89,225,255,0.18),transparent_25%),radial-gradient(circle_at_left,rgba(124,92,255,0.18),transparent_20%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />

      <section className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <nav className="flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold tracking-wide text-white">BridgeAU AI</p>
            <p className="text-sm text-white/60">Future of Work • International Talent</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#features"
              className="hidden rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 transition hover:border-cyan-300/40 hover:text-white md:inline-flex"
            >
              Features
            </a>
            <Link
              href="/app"
              className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Try Demo
            </Link>
          </div>
        </nav>

        <div className="grid items-center gap-14 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-300">
              AI Employability Translator
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Turn international talent into
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                {" "}
                Australian job readiness
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              BridgeAU AI helps international students and skilled migrants translate
              their experience, understand job-fit gaps, and prepare for real career
              opportunities in Australia.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/app"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start Free Demo
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white/85 transition hover:border-cyan-300/40 hover:text-white"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/65">
              <span>✓ Skills translation</span>
              <span>✓ CV-to-JD matching</span>
              <span>✓ Interview coaching</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[24px] border border-cyan-300/10 bg-[#0b1738]/90 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/55">Live employability analysis</p>
                    <h3 className="mt-1 text-2xl font-semibold">BridgeAU Report</h3>
                  </div>
                  <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-right">
                    <p className="text-xs text-white/60">Match Score</p>
                    <p className="text-2xl font-bold text-cyan-300">78%</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                    <p className="text-sm text-white/55">Matched Skills</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["SQL", "Excel", "Power BI", "Stakeholder Communication"].map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                    <p className="text-sm text-white/55">Missing Skills</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Advanced SQL", "Data Storytelling", "Local Experience"].map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/8 bg-gradient-to-r from-cyan-400/10 to-violet-400/10 p-4">
                  <p className="text-sm text-white/55">AI Recommendation</p>
                  <p className="mt-2 text-sm leading-7 text-white/80">
                    Rewrite your summary using Australian recruitment language, strengthen
                    evidence of analytics projects, and prepare STAR examples for stakeholder
                    communication.
                  </p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {["CV Rewrite", "Interview Prep", "30-Day Plan"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm text-white/80"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <p className="text-3xl font-bold text-cyan-300">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/65">{stat.label}</p>
            </div>
          ))}
        </section>

        <section id="features" className="py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Core Features</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Built to bridge the gap between talent and opportunity
            </h2>
            <p className="mt-4 text-white/65">
              BridgeAU AI focuses on practical job-readiness support that is fast to use,
              transparent, and helpful for international talent navigating the Australian market.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-cyan-300/30 hover:bg-white/7"
              >
                <div className="mb-4 h-11 w-11 rounded-2xl bg-gradient-to-br from-cyan-300/30 to-violet-400/30" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="grid items-start gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-md lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">How It Works</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              From raw experience to job-ready insights in minutes
            </h2>
            <p className="mt-4 max-w-2xl text-white/65">
              Users simply provide their CV and a target role. BridgeAU AI analyzes
              transferable skills, rewrites experience into local-market language, and
              generates a practical improvement roadmap.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0b1738]/80 p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-300 font-semibold text-slate-950">
                  {index + 1}
                </div>
                <p className="pt-1 text-white/85">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="rounded-[32px] border border-cyan-300/15 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-violet-400/10 p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                Responsible AI
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Designed to support people, not replace human judgment
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/70">
                BridgeAU AI does not make hiring decisions. It helps candidates improve
                clarity, confidence, and readiness while encouraging transparency, fairness,
                and human review.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-md md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Get Started</p>
              <h2 className="mt-2 text-3xl font-bold">See your employability story in a new way</h2>
              <p className="mt-3 max-w-2xl text-white/65">
                Start the demo and turn a CV plus job description into clear, actionable career guidance.
              </p>
            </div>

            <Link
              href="/app"
              className="rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Launch Demo
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
