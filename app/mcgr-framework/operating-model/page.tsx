import Link from "next/link";
import BrandBar from "../../../../components/BrandBar";

const layers = [
  ["Flagship narrative", "MCGR-Framework"],
  ["Strategy", "Executive Technology Roadmaps, Enterprise Architecture Blueprints"],
  ["Governance", "Cloud Risk and Compliance Controls, AI Governance Framework, Cloud FinOps Governance, DR Governance Framework"],
  ["Assessment", "Cloud Governance Assessment Toolkit, Enterprise Resilience Maturity Model, Technical Due Diligence Cloud"],
  ["Reliability", "SLO-Driven Cloud Architecture, SRE Reliability Models, Predictive Reliability Models"],
  ["Observability", "AI-Driven Observability Framework, Self-Healing Cloud Operations"],
  ["Platform", "Platform Engineering Operating Model"],
  ["Evidence", "Cloud Transformation Case Studies, Papers and Publications"],
];

const groups = [
  {
    title: "Strategy And Roadmaps",
    items: [
      ["Executive Technology Roadmaps", "https://github.com/rammar876/executive-technology-roadmaps"],
      ["Enterprise Architecture Blueprints", "https://github.com/rammar876/enterprise-architecture-blueprints"],
      ["Cloud Transformation Case Studies", "https://github.com/rammar876/cloud-transformation-case-studies"],
    ],
  },
  {
    title: "Governance And Control",
    items: [
      ["Cloud Risk And Compliance Controls", "https://github.com/rammar876/cloud-risk-compliance-controls"],
      ["AI Governance Framework", "https://github.com/rammar876/ai-governance-framework"],
      ["Cloud FinOps Governance", "https://github.com/rammar876/cloud-finops-governance"],
      ["DR Governance Framework", "https://github.com/rammar876/dr-governance-framework"],
    ],
  },
  {
    title: "Assessment And Maturity",
    items: [
      ["Cloud Governance Assessment Toolkit", "https://github.com/rammar876/cloud-governance-assessment-toolkit"],
      ["Enterprise Resilience Maturity Model", "https://github.com/rammar876/enterprise-resilience-maturity-model"],
      ["Technical Due Diligence Cloud", "https://github.com/rammar876/technical-due-diligence-cloud"],
    ],
  },
  {
    title: "Reliability And Observability",
    items: [
      ["SLO-Driven Cloud Architecture", "https://github.com/rammar876/slo-driven-cloud-architecture"],
      ["SRE Reliability Models", "https://github.com/rammar876/sre-reliability-models"],
      ["Predictive Reliability Models", "https://github.com/rammar876/predictive-reliability-models"],
      ["AI-Driven Observability Framework", "https://github.com/rammar876/ai-driven-observability-framework"],
      ["Self-Healing Cloud Operations", "https://github.com/rammar876/self-healing-cloud-operations"],
    ],
  },
  {
    title: "Platform And Evidence",
    items: [
      ["Platform Engineering Operating Model", "https://github.com/rammar876/platform-engineering-operating-model"],
      ["Architecture Diagrams", "https://github.com/rammar876/architecture-diagrams"],
      ["Papers And Publications", "https://github.com/rammar876/papers-and-publications"],
    ],
  },
];

export default function OperatingModelPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <BrandBar
        eyebrow="MCGR Operating Model Index"
        title="See the ecosystem as one operating model."
        description="This page groups the repositories by strategy, governance, assessment, reliability, observability, platform, and evidence so leaders can scan the whole system from one place."
      />

      <section className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-4 text-sm font-bold sm:px-6">
          <Link href="/mcgr-framework" className="rounded-full border border-slate-700 px-4 py-2 hover:border-blue-400">
            Home
          </Link>
          <Link href="/mcgr-framework/ecosystem" className="rounded-full border border-slate-700 px-4 py-2 hover:border-blue-400">
            Ecosystem
          </Link>
          <Link href="/mcgr-framework/operating-model" className="rounded-full border border-blue-400 px-4 py-2 text-blue-300">
            Operating Model
          </Link>
          <Link href="/mcgr-framework/publications" className="rounded-full border border-slate-700 px-4 py-2 hover:border-blue-400">
            Publications
          </Link>
          <Link href="/mcgr-framework/assets" className="rounded-full border border-slate-700 px-4 py-2 hover:border-blue-400">
            Assets
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <p className="text-blue-300 font-bold mb-3">Reading Path</p>
          <ol className="space-y-3 text-slate-300 leading-7">
            <li>1. Start with the MCGR flagship page and ecosystem map.</li>
            <li>2. Move into the strategy and governance repos to understand the operating rules.</li>
            <li>3. Review assessment and maturity repos to see current-state scoring.</li>
            <li>4. Open roadmap repos to see sequencing and execution order.</li>
            <li>5. Use case study and publication repos to see evidence and proof.</li>
          </ol>
        </div>

        <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {layers.map(([layer, description]) => (
            <div key={layer} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-blue-300 font-bold mb-2">{layer}</p>
              <p className="text-slate-300 leading-7">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-2xl sm:text-3xl font-black mb-5">{group.title}</h2>
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {group.items.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-400"
                  >
                    <div className="font-bold text-lg leading-snug">{label}</div>
                    <div className="mt-2 text-sm text-slate-400">Open Repository</div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
