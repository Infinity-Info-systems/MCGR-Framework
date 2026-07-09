import Link from "next/link";
import BrandBar from "../../../components/BrandBar";
import { mcgrAssets } from "../../../src";

export default function AssetsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <BrandBar
        eyebrow="MCGR Assets"
        title="The Ready-Reference Tools And Reusable Assets For MCGR."
        description="Use this page to find the diagrams, templates, scorecards, case studies, and publications that support the framework."
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-0">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 text-slate-300">
          <p className="text-blue-300 font-bold mb-3">Wiki Reference</p>
          <p className="leading-7 max-w-4xl">
            More insights are available in the GitHub Wiki, including the framework structure, outcomes, and supporting technical context.
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid gap-4 sm:gap-6">
        {mcgrAssets.map((asset) => (
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
