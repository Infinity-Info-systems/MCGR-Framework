import Link from "next/link";

const coreFrameworks = [
  ["Multi-Cloud Governance Model", "https://github.com/rammar876/multi-cloud-governance-model"],
  ["SLO-Driven Cloud Architecture", "https://github.com/rammar876/slo-driven-cloud-architecture"],
  ["Cloud FinOps Governance", "https://github.com/rammar876/cloud-finops-governance"],
  ["DR Governance Framework", "https://github.com/rammar876/dr-governance-framework"],
  ["AI-Driven Observability Framework", "https://github.com/rammar876/ai-driven-observability-framework"],
  ["Cloud Risk and Compliance Controls", "https://github.com/rammar876/cloud-risk-compliance-controls"],
  ["AI Governance Framework", "https://github.com/rammar876/ai-governance-framework"],
];

const operatingRepos = [
  ["Cloud Governance Assessment Toolkit", "https://github.com/rammar876/cloud-governance-assessment-toolkit"],
  ["Enterprise Resilience Maturity Model", "https://github.com/rammar876/enterprise-resilience-maturity-model"],
  ["Technical Due Diligence Cloud", "https://github.com/rammar876/technical-due-diligence-cloud"],
  ["Platform Engineering Operating Model", "https://github.com/rammar876/platform-engineering-operating-model"],
  ["Executive Technology Roadmaps", "https://github.com/rammar876/executive-technology-roadmaps"],
];

const knowledgeRepos = [
  ["Architecture Diagrams", "https://github.com/rammar876/architecture-diagrams"],
  ["Cloud Transformation Case Studies", "https://github.com/rammar876/cloud-transformation-case-studies"],
  ["Enterprise Architecture Blueprints", "https://github.com/rammar876/enterprise-architecture-blueprints"],
  ["Papers and Publications", "https://github.com/rammar876/papers-and-publications"],
  ["Predictive Reliability Models", "https://github.com/rammar876/predictive-reliability-models"],
  ["Self-Healing Cloud Operations", "https://github.com/rammar876/self-healing-cloud-operations"],
  ["SRE Reliability Models", "https://github.com/rammar876/sre-reliability-models"],
];

const wikiLayers = [
  "Governance And Policy",
  "Observability And SRE",
  "Cost Optimization",
  "Disaster Recovery And Resilience",
  "Multi-Cloud Infrastructure",
];

const wikiMetrics = [
  ["Cloud Cost", "~35% Reduction"],
  ["Uptime", "99.9%+"],
  ["MTTR", "Reduced"],
  ["Resource Utilization", "Optimized"],
  ["DR Readiness", "Improved"],
];

export default function MCGRFrameworkPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1d4ed8,transparent_35%),radial-gradient(circle_at_bottom_right,#0f766e,transparent_30%)] opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-slate-950/70 px-4 py-2">
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-blue-400/40 bg-slate-950">
              <img src="/mcgr-logo.svg" alt="MCGR Framework logo" className="h-full w-full object-contain p-1" />
            </div>
            <p className="text-sm font-semibold tracking-[0.18em] text-blue-300 uppercase">MCGR Framework</p>
          </div>
          <p className="text-blue-300 font-bold mb-4">Infinity Info Systems / Flagship Enterprise Offering</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] max-w-5xl mb-6">
            MCGR Framework Gives Enterprises One Consistent Operating Model For Multi-Cloud Governance, Reliability, Resilience, FinOps, Observability, And Compliance.
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-8 max-w-4xl mb-10">
            It Is The Public Face Of Our Enterprise Service Offering, Backed By Research, Artifacts, And A Connected Repository Ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
            <Link href="#ecosystem" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-bold">
              Explore The Ecosystem
            </Link>
            <a
              href="https://github.com/rammar876/MCGR-Framework"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-600 hover:border-blue-400 px-6 py-3 rounded-xl font-bold"
            >
              Open MCGR-Framework Repo
            </a>
            <Link href="/mcgr-framework/publications" className="border border-slate-600 hover:border-blue-400 px-6 py-3 rounded-xl font-bold">
              View Publications
            </Link>
            <Link href="/mcgr-framework/assets" className="border border-slate-600 hover:border-blue-400 px-6 py-3 rounded-xl font-bold">
              View Assets
            </Link>
            <Link href="/mcgr-framework/ecosystem" className="border border-slate-600 hover:border-blue-400 px-6 py-3 rounded-xl font-bold">
              Open Ready Reference
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-blue-300 font-bold mb-4">EXECUTIVE VALUE</p>
        <h2 className="text-3xl md:text-4xl font-black mb-6">One Flagship Model For Enterprise Cloud Leadership.</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 text-slate-300 leading-7">
          {[
            "Standardize governance across cloud environments",
            "Improve reliability with SLOs and scorecards",
            "Strengthen disaster recovery and resilience planning",
            "Increase cost accountability with FinOps governance",
            "Turn observability into predictive operational signals",
            "Align compliance with audit-ready controls",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-blue-400/30 bg-gradient-to-br from-slate-900 to-blue-950 p-6 md:p-8">
            <p className="text-blue-300 font-bold mb-4">Technical Reference</p>
            <h2 className="text-2xl md:text-4xl font-black mb-5">A Five-Layer Operating Model With A Continuous Feedback Loop.</h2>
            <p className="text-slate-300 leading-7 max-w-3xl">
              The technical documentation describes MCGR as a practical enterprise model that unifies governance, SRE, FinOps, disaster recovery, and infrastructure into one repeatable operating system.
            </p>
            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-slate-300 sm:flex-row sm:items-center sm:justify-between">
              <p className="leading-7">
                More insights are available in the GitHub Wiki, which serves as the deeper technical reference for the MCGR framework.
              </p>
              <a
                href="https://github.com/Infinity-Info-systems/MCGR-Framework/wiki"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-xl border border-blue-400 px-4 py-2 font-bold text-blue-300 hover:bg-blue-400 hover:text-slate-950 transition"
              >
                Open GitHub Wiki
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 mt-8">
              {wikiLayers.map((layer) => (
                <div key={layer} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 font-bold text-slate-100">
                  {layer}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a
                href="https://github.com/rammar876/MCGR-Framework"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-600 px-5 py-3 font-bold hover:border-blue-400"
              >
                Open Repo
              </a>
              <Link href="/mcgr-framework/ecosystem" className="rounded-xl border border-slate-600 px-5 py-3 font-bold hover:border-blue-400">
                Explore Ecosystem
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 md:p-8">
            <p className="text-blue-300 font-bold mb-4">Operational Outcomes</p>
            <h2 className="text-2xl md:text-3xl font-black mb-5">Executive Outcomes</h2>
            <div className="space-y-3">
              {wikiMetrics.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3">
                  <span className="text-slate-300">{label}</span>
                  <span className="font-bold text-white">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/mcgr-framework/ecosystem" className="inline-flex rounded-xl border border-blue-400 px-5 py-3 font-bold text-blue-300 hover:bg-blue-400 hover:text-slate-950 transition">
                Explore Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="border-t border-b border-slate-800 bg-slate-950/90">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
            <h2 className="text-3xl md:text-4xl font-black">Ecosystem</h2>
            <Link href="/mcgr-framework/ecosystem" className="text-blue-300 font-bold hover:text-blue-200">
              Open Ready Reference
            </Link>
          </div>
          <p className="text-slate-300 text-lg leading-8 max-w-4xl mb-10">
            The Framework Is Grouped Into Core Layers, Applied Operating Repos, And Supporting Knowledge Repos.
          </p>

          <div className="space-y-12">
            {[
              ["Core Frameworks", coreFrameworks],
              ["Applied Operating Repos", operatingRepos],
              ["Supporting Knowledge Repos", knowledgeRepos],
            ].map(([groupName, groupItems]) => (
              <div key={groupName as string}>
                <h3 className="text-2xl font-black mb-6">{groupName as string}</h3>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {(groupItems as [string, string][]).map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:border-blue-400 transition"
                    >
                      <div className="font-bold text-lg">{label}</div>
                      <div className="text-slate-400 text-sm mt-2">Open Repository</div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10">
          <div>
            <p className="text-blue-300 font-bold mb-4">Publications</p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Research-Backed And Publication-Ready.</h2>
            <div className="space-y-4 text-slate-300 leading-7">
              <p>MCGR Is Supported By SSRN Papers, Conference Submissions, Citations, And Reusable Evidence Assets.</p>
              <p>The Publication Trail Reinforces MCGR As A Serious Operating Model For Enterprise Cloud Governance And Resilience.</p>
              <Link href="/mcgr-framework/publications" className="inline-flex mt-3 text-blue-300 font-bold hover:text-blue-200">
                Open Publications Page
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <ul className="space-y-4 text-slate-200 leading-7">
              <li>A Multi-Cloud Governance And Site Reliability Engineering Framework For FinTech Platforms</li>
              <li>AI-Driven Observability And Reliability Framework For Multi-Cloud Financial Platforms</li>
              <li>A Standardized Multi-Cloud Governance Model For Policy Consistency And Drift Detection</li>
              <li>Designing SLO-Driven Cloud Architectures</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="assets" className="border-t border-slate-800 bg-slate-950/90">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
            <h2 className="text-3xl md:text-4xl font-black">Assets</h2>
            <Link href="/mcgr-framework/assets" className="text-blue-300 font-bold hover:text-blue-200">
              Open Assets Page
            </Link>
          </div>
          <p className="text-slate-300 text-lg leading-8 max-w-4xl mb-10">
            Use The Supporting Repositories For Diagrams, Templates, Scorecards, Dashboards, Maturity Models, And Case Studies.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {[
              "Framework Diagrams",
              "Assessment Templates",
              "Maturity And Scorecard Models",
              "Research Publications",
              "Transformation Case Studies",
              "Executive Roadmaps",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
