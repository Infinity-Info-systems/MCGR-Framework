import Link from "next/link";
import BrandBar from "../../../components/BrandBar";

const publications = [
  {
    title: "A Multi-Cloud Governance And Site Reliability Engineering Framework For FinTech Platforms",
    detail: "SSRN case study and umbrella MCGR framework paper.",
    href: "https://papers.ssrn.com/abstract=6663578",
  },
  {
    title: "AI-Driven Observability And Reliability Framework For Multi-Cloud Financial Platforms",
    detail: "Predictive observability and operational intelligence publication.",
    href: "https://papers.ssrn.com/abstract=6557159",
  },
  {
    title: "A Standardized Multi-Cloud Governance Model For Policy Consistency And Drift Detection",
    detail: "Governance consistency and drift detection publication.",
    href: "https://papers.ssrn.com/abstract=6713338",
  },
  {
    title: "Designing SLO-Driven Cloud Architectures",
    detail: "Reliability, performance, and cost balancing framework.",
    href: "https://papers.ssrn.com/abstract=6617678",
  },
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <BrandBar
        eyebrow="MCGR Publications"
        title="The Research And Publication Trail Behind MCGR."
        description="This page provides a ready reference to the public papers, SSRN links, and supporting research materials that anchor the framework."
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-0">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 text-slate-300">
          <p className="text-blue-300 font-bold mb-3">Wiki Reference</p>
          <p className="leading-7 max-w-4xl">
            More insights are available in the GitHub Wiki, where the framework narrative and supporting evidence are organized in a deeper technical reference.
          </p>
          <a
            href="https://github.com/Infinity-Info-systems/MCGR-Framework/wiki"
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-5 rounded-xl border border-blue-400 px-4 py-2 font-bold text-blue-300 hover:bg-blue-400 hover:text-slate-950 transition"
          >
            Open Wiki
          </a>
        </div>
        <div className="mt-8">
          <Link href="/mcgr-framework" className="inline-flex rounded-xl border border-slate-600 px-5 py-3 font-bold hover:border-blue-400">
            Back To MCGR Home
          </Link>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap gap-2 sm:gap-3 text-sm font-bold">
          <Link href="/mcgr-framework" className="rounded-full border border-slate-700 px-4 py-2 hover:border-blue-400">Home</Link>
          <Link href="/mcgr-framework/ecosystem" className="rounded-full border border-slate-700 px-4 py-2 hover:border-blue-400">Ecosystem</Link>
          <Link href="/mcgr-framework/publications" className="rounded-full border border-blue-400 px-4 py-2 text-blue-300">Publications</Link>
          <Link href="/mcgr-framework/assets" className="rounded-full border border-slate-700 px-4 py-2 hover:border-blue-400">Assets</Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid gap-4 sm:gap-6">
        {publications.map((paper) => (
          <a
            key={paper.title}
            href={paper.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 hover:border-blue-400 transition"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 leading-tight">{paper.title}</h2>
            <p className="text-slate-300 text-base sm:text-lg leading-7">{paper.detail}</p>
            <p className="text-blue-300 font-bold mt-5">Open SSRN</p>
          </a>
        ))}
      </section>
    </main>
  );
}
