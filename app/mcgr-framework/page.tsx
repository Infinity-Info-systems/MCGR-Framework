import Link from "next/link";
import {
  mcgrExecutiveSummary,
  mcgrPublications,
  mcgrRepoGroups,
  mcgrSpotlightRepos,
  mcgrWikiLayers,
  mcgrWikiMetrics,
} from "../../src";

export default function MCGRFrameworkPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1d4ed8,transparent_35%),radial-gradient(circle_at_bottom_right,#0f766e,transparent_30%)] opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <p className="text-blue-300 font-bold mb-4">Infinity Info Systems / Flagship Enterprise Offering</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] max-w-5xl mb-6">
            MCGR Framework Gives Enterprises One Consistent Operating Model For Multi-cloud Governance, Reliability, Resilience, FinOps, Observability, And Compliance.
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-8 max-w-4xl mb-10">
            It is the public face of our enterprise service offering, backed by research, artifacts, and a connected repository ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
            <a
              href="/downloads/mcgr-enterprise-starter-kit.zip"
              download
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-bold"
            >
              Download enterprise starter kit
            </a>
            <Link href="#ecosystem" className="border border-slate-600 hover:border-blue-400 px-6 py-3 rounded-xl font-bold">
              Explore the ecosystem
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
              View publications
            </Link>
            <Link href="/mcgr-framework/assets" className="border border-slate-600 hover:border-blue-400 px-6 py-3 rounded-xl font-bold">
              View assets
            </Link>
            <Link href="/mcgr-framework/ecosystem" className="border border-slate-600 hover:border-blue-400 px-6 py-3 rounded-xl font-bold">
              Open ready reference
            </Link>
            <Link href="/mcgr-framework/contact" className="border border-slate-600 hover:border-blue-400 px-6 py-3 rounded-xl font-bold">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-950 p-6 md:p-8 mb-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-emerald-300 font-bold mb-3">Ready-to-download implementation code</p>
              <h2 className="text-2xl md:text-3xl font-black mb-3">Start managing your multi-cloud estate with an MCGR-aligned baseline.</h2>
              <p className="max-w-3xl text-slate-300 leading-7">Download a dependency-free Node.js starter kit that evaluates governance, SLO coverage, disaster-recovery validation, FinOps, observability, and compliance across AWS, Azure, GCP, or hybrid environments. It includes an editable cloud-estate inventory, automated assessment, and JSON report output.</p>
            </div>
            <a href="/downloads/mcgr-enterprise-starter-kit.zip" download className="inline-flex shrink-0 justify-center rounded-xl bg-emerald-400 px-5 py-3 font-bold text-slate-950 hover:bg-emerald-300">Download .zip</a>
          </div>
        </div>
        <p className="text-blue-300 font-bold mb-4">Executive Value</p>
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
        <div className="rounded-3xl border border-blue-400/30 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 p-6 md:p-8">
          <p className="text-blue-300 font-bold mb-3">Featured Research Spotlight</p>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-black mb-4">MCGR-Framework</h2>
              <p className="text-slate-300 leading-7 max-w-3xl">
                The flagship research repository that anchors the broader MCGR operating model and connects the governance, reliability, resilience, FinOps, observability, and evidence layers into one public story.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://github.com/Infinity-Info-systems/MCGR-Framework"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-xl bg-blue-500 px-5 py-3 font-bold hover:bg-blue-600"
                >
                  Open MCGR-Framework Repo
                </a>
                <Link
                  href="/mcgr-framework/operating-model"
                  className="inline-flex rounded-xl border border-slate-600 px-5 py-3 font-bold hover:border-blue-400"
                >
                  Open operating model
                </Link>
              </div>
            </div>
            <div className="grid gap-3">
              {mcgrSpotlightRepos.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 transition hover:border-blue-400"
                >
                  <div className="font-bold text-lg">{label}</div>
                  <div className="mt-1 text-sm text-slate-400">Open reference</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-blue-300 font-bold mb-4">Executive Summary</p>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-4">A concise operating model for leaders who need the whole picture quickly.</h2>
              <p className="text-slate-300 leading-7 max-w-3xl">
                MCGR combines governance, reliability, resilience, FinOps, observability, and compliance into one public-facing framework with a supporting ecosystem of repos, evidence, and publications.
              </p>
            </div>
            <ul className="space-y-3 text-slate-300 leading-7">
              {mcgrExecutiveSummary.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-blue-400/30 bg-gradient-to-br from-slate-900 to-blue-950 p-6 md:p-8">
            <p className="text-blue-300 font-bold mb-4">Technical Reference</p>
            <h2 className="text-2xl md:text-4xl font-black mb-5">A five-layer operating model with a continuous feedback loop.</h2>
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
              {mcgrWikiLayers.map((layer) => (
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
            <h2 className="text-2xl md:text-3xl font-black mb-5">Executive outcomes</h2>
            <div className="space-y-3">
              {mcgrWikiMetrics.map(([label, value]) => (
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
            The framework is grouped into core layers, applied operating repos, and supporting knowledge repos.
          </p>

          <div className="space-y-12">
            {mcgrRepoGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-2xl font-black mb-6">{group.title}</h3>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {group.items.map(([label, href]) => (
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
            <h2 className="text-3xl md:text-4xl font-black mb-6">Research-backed and publication-ready.</h2>
            <div className="space-y-4 text-slate-300 leading-7">
              <p>MCGR is supported by SSRN papers, conference submissions, citations, and reusable evidence assets.</p>
              <p>The publication trail reinforces MCGR as a serious operating model for enterprise cloud governance and resilience.</p>
              <Link href="/mcgr-framework/publications" className="inline-flex mt-3 text-blue-300 font-bold hover:text-blue-200">
                Open publications page
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <ul className="space-y-4 text-slate-200 leading-7">
              {mcgrPublications.map(([title]) => (
                <li key={title}>{title}</li>
              ))}
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
            Use the supporting repositories for diagrams, templates, scorecards, dashboards, maturity models, and case studies.
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
