import Link from "next/link";
import BrandBar from "../../../components/BrandBar";
import { mcgrOperatingLayers, mcgrOperatingSections } from "../../../src";

export default function OperatingModelPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <BrandBar
        eyebrow="MCGR Operating Model Index"
        title="See the ecosystem as one operating model."
        description="This page groups the repositories by strategy, governance, assessment, reliability, observability, platform, and evidence so leaders can scan the whole system from one place."
      />

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
          {mcgrOperatingLayers.map(([layer, description]) => (
            <div key={layer} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-blue-300 font-bold mb-2">{layer}</p>
              <p className="text-slate-300 leading-7">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-12">
          {mcgrOperatingSections.map((group) => (
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
