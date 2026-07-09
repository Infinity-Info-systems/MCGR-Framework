import Link from "next/link";
import BrandBar from "../../../components/BrandBar";

const sections = [
  {
    title: "Technical Reference Layers",
    items: [
      ["Governance And Policy", "https://github.com/rammar876/multi-cloud-governance-model"],
      ["Observability And SRE", "https://github.com/rammar876/ai-driven-observability-framework"],
      ["Cost Optimization", "https://github.com/rammar876/cloud-finops-governance"],
      ["Disaster Recovery And Resilience", "https://github.com/rammar876/dr-governance-framework"],
      ["Multi-Cloud Infrastructure", "https://github.com/rammar876/enterprise-architecture-blueprints"],
    ],
  },
  {
    title: "Core Frameworks",
    items: [
      ["Multi-Cloud Governance Model", "https://github.com/rammar876/multi-cloud-governance-model"],
      ["SLO-Driven Cloud Architecture", "https://github.com/rammar876/slo-driven-cloud-architecture"],
      ["Cloud FinOps Governance", "https://github.com/rammar876/cloud-finops-governance"],
      ["DR Governance Framework", "https://github.com/rammar876/dr-governance-framework"],
      ["AI-Driven Observability Framework", "https://github.com/rammar876/ai-driven-observability-framework"],
      ["Cloud Risk And Compliance Controls", "https://github.com/rammar876/cloud-risk-compliance-controls"],
      ["AI Governance Framework", "https://github.com/rammar876/ai-governance-framework"],
    ],
  },
  {
    title: "Applied Operating Repos",
    items: [
      ["Cloud Governance Assessment Toolkit", "https://github.com/rammar876/cloud-governance-assessment-toolkit"],
      ["Enterprise Resilience Maturity Model", "https://github.com/rammar876/enterprise-resilience-maturity-model"],
      ["Technical Due Diligence Cloud", "https://github.com/rammar876/technical-due-diligence-cloud"],
      ["Platform Engineering Operating Model", "https://github.com/rammar876/platform-engineering-operating-model"],
      ["Executive Technology Roadmaps", "https://github.com/rammar876/executive-technology-roadmaps"],
    ],
  },
  {
    title: "Supporting Knowledge Repos",
    items: [
      ["Architecture Diagrams", "https://github.com/rammar876/architecture-diagrams"],
      ["Cloud Transformation Case Studies", "https://github.com/rammar876/cloud-transformation-case-studies"],
      ["Enterprise Architecture Blueprints", "https://github.com/rammar876/enterprise-architecture-blueprints"],
      ["Papers And Publications", "https://github.com/rammar876/papers-and-publications"],
      ["Predictive Reliability Models", "https://github.com/rammar876/predictive-reliability-models"],
      ["Self-Healing Cloud Operations", "https://github.com/rammar876/self-healing-cloud-operations"],
      ["SRE Reliability Models", "https://github.com/rammar876/sre-reliability-models"],
    ],
  },
];

export default function EcosystemPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <BrandBar
        eyebrow="MCGR Ecosystem"
        title="The Participating Repositories That Make Up The MCGR Framework."
        description="This page is the ready-reference map for the MCGR repository family. Use it to jump directly to the right framework, operating model, or supporting knowledge repo."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 sm:space-y-12">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <p className="text-blue-300 font-bold mb-3">Operating Model Index</p>
          <h2 className="text-2xl sm:text-3xl font-black mb-4">See the ecosystem as one operating model.</h2>
          <p className="text-slate-300 leading-7 max-w-4xl">
            The master operating model index groups the repos by strategy, governance, assessment, reliability, observability, platform, and evidence so the broader system is easier to scan.
          </p>
          <Link href="/mcgr-framework/operating-model" className="inline-flex mt-5 rounded-xl border border-blue-400 px-5 py-3 font-bold text-blue-300 hover:bg-blue-400 hover:text-slate-950 transition">
            Open operating model index
          </Link>
        </div>

        <div className="rounded-3xl border border-blue-400/30 bg-gradient-to-br from-blue-950 to-slate-900 p-6 sm:p-8 md:p-10">
          <p className="text-blue-300 font-bold mb-4">Featured Repository</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-5">MCGR-Framework</h2>
          <p className="text-slate-300 text-base sm:text-lg leading-7 sm:leading-8 max-w-4xl mb-8">
            The flagship repository that anchors the entire MCGR ecosystem and ties together the supporting frameworks, publications, and artifacts.
          </p>
          <a
            href="https://github.com/rammar876/MCGR-Framework"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-blue-500 hover:bg-blue-600 px-6 py-3 font-bold"
          >
            Open MCGR-Framework Repo
          </a>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <p className="text-blue-300 font-bold mb-4">Continuous Feedback Loop</p>
          <p className="text-slate-300 leading-7 max-w-4xl">
            The technical documentation frames MCGR as an operating system where observability identifies inefficiencies, cost optimization recalibrates resources, governance updates policies, DR validates resilience, and continuous improvement is enforced across the stack.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-2xl sm:text-3xl font-black mb-5 sm:mb-6">{section.title}</h2>
            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {section.items.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-5 hover:border-blue-400 transition"
                >
                  <div className="font-bold text-base sm:text-lg leading-snug">{label}</div>
                  <div className="text-slate-400 text-sm mt-2">Open Repository</div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
