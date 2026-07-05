import Link from "next/link";

const assets = [
  {
    title: "Architecture Diagrams",
    detail: "Visual models for governance, SRE, observability, resilience, and FinOps.",
    href: "https://github.com/rammar876/architecture-diagrams",
  },
  {
    title: "Cloud Governance Assessment Toolkit",
    detail: "Assessment checklists, scorecards, questionnaires, and remediation templates.",
    href: "https://github.com/rammar876/cloud-governance-assessment-toolkit",
  },
  {
    title: "Cloud Transformation Case Studies",
    detail: "Narrative case studies, impact metrics, and executive storytelling artifacts.",
    href: "https://github.com/rammar876/cloud-transformation-case-studies",
  },
  {
    title: "Enterprise Resilience Maturity Model",
    detail: "Maturity levels, scorecards, dashboards, and roadmap templates.",
    href: "https://github.com/rammar876/enterprise-resilience-maturity-model",
  },
  {
    title: "Papers And Publications",
    detail: "SSRN papers, citations, abstracts, LaTeX, and PDF references.",
    href: "https://github.com/rammar876/papers-and-publications",
  },
];

export default function AssetsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-blue-300 font-bold mb-4">MCGR Assets</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight max-w-5xl mb-6">
            The Ready-Reference Tools And Reusable Assets For MCGR.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-7 sm:leading-8 max-w-4xl">
            Use this page to find the diagrams, templates, scorecards, case studies, and publications that support the framework.
          </p>
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-300">
            <p className="leading-7">
              More insights are available in the GitHub Wiki, including the framework structure, outcomes, and supporting technical context.
            </p>
            <a
              href="https://github.com/Infinity-Info-systems/MCGR-Framework/wiki"
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-4 rounded-xl border border-blue-400 px-4 py-2 font-bold text-blue-300 hover:bg-blue-400 hover:text-slate-950 transition"
            >
              Open Wiki
            </a>
          </div>
          <div className="mt-8">
            <Link href="/mcgr-framework" className="inline-flex rounded-xl border border-slate-600 px-5 py-3 font-bold hover:border-blue-400">
              Back To MCGR Home
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap gap-2 sm:gap-3 text-sm font-bold">
          <Link href="/mcgr-framework" className="rounded-full border border-slate-700 px-4 py-2 hover:border-blue-400">Home</Link>
          <Link href="/mcgr-framework/ecosystem" className="rounded-full border border-slate-700 px-4 py-2 hover:border-blue-400">Ecosystem</Link>
          <Link href="/mcgr-framework/publications" className="rounded-full border border-slate-700 px-4 py-2 hover:border-blue-400">Publications</Link>
          <Link href="/mcgr-framework/assets" className="rounded-full border border-blue-400 px-4 py-2 text-blue-300">Assets</Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid gap-4 sm:gap-6">
        {assets.map((asset) => (
          <a
            key={asset.title}
            href={asset.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 hover:border-blue-400 transition"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 leading-tight">{asset.title}</h2>
            <p className="text-slate-300 text-base sm:text-lg leading-7">{asset.detail}</p>
            <p className="text-blue-300 font-bold mt-5">Open Repository</p>
          </a>
        ))}
      </section>
    </main>
  );
}
