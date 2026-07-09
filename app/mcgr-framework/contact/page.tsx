import Link from "next/link";
import BrandBar from "../../../../components/BrandBar";

const contactPaths = [
  {
    title: "GitHub Repository",
    detail: "Open the MCGR-Framework repo for source, issues, and repository history.",
    href: "https://github.com/Infinity-Info-systems/MCGR-Framework",
    label: "Open Repo",
  },
  {
    title: "GitHub Wiki",
    detail: "Use the wiki for deeper technical reference, narrative notes, and supporting context.",
    href: "https://github.com/Infinity-Info-systems/MCGR-Framework/wiki",
    label: "Open Wiki",
  },
  {
    title: "Ecosystem Map",
    detail: "Review the operating model and use the ecosystem page to navigate the participating repos.",
    href: "/mcgr-framework/ecosystem",
    label: "View Ecosystem",
  },
];

const inquiryTypes = [
  "Framework questions",
  "Partnership and collaboration",
  "Research or publication follow-up",
  "Repo or content feedback",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <BrandBar
        eyebrow="MCGR Contact"
        title="How To Reach The MCGR Framework."
        description="Use this page to find the right reference path for the framework, supporting repos, and the deeper technical material."
      />

      <section className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-4 text-sm font-bold sm:px-6">
          <Link href="/mcgr-framework" className="rounded-full border border-slate-700 px-4 py-2 hover:border-blue-400">
            Home
          </Link>
          <Link href="/mcgr-framework/ecosystem" className="rounded-full border border-slate-700 px-4 py-2 hover:border-blue-400">
            Ecosystem
          </Link>
          <Link href="/mcgr-framework/publications" className="rounded-full border border-slate-700 px-4 py-2 hover:border-blue-400">
            Publications
          </Link>
          <Link href="/mcgr-framework/assets" className="rounded-full border border-slate-700 px-4 py-2 hover:border-blue-400">
            Assets
          </Link>
          <Link href="/mcgr-framework/contact" className="rounded-full border border-blue-400 px-4 py-2 text-blue-300">
            Contact
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-3xl border border-blue-400/30 bg-gradient-to-br from-slate-900 to-blue-950 p-6 sm:p-8">
          <p className="text-blue-300 font-bold mb-3">Best Paths</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">Choose the right path depending on what you need.</h2>
          <p className="text-slate-300 leading-7 max-w-4xl">
            The MCGR site is designed as a showcase path for the operating model, the ecosystem, the publications, and the supporting assets. Start with the route that matches your goal.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {contactPaths.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-400"
            >
              <h3 className="text-xl font-black mb-3">{item.title}</h3>
              <p className="text-slate-300 leading-7">{item.detail}</p>
              <p className="mt-5 font-bold text-blue-300">{item.label}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <p className="text-blue-300 font-bold mb-3">Direct Inquiry</p>
            <h3 className="text-2xl font-black mb-4">Use this path when you want to discuss the framework with a person.</h3>
            <p className="text-slate-300 leading-7 max-w-3xl">
              This space is set up for an eventual direct form, but it can already guide people to the right conversation path based on what they need to discuss.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {inquiryTypes.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-blue-400/30 bg-gradient-to-br from-slate-900 to-blue-950 p-6 sm:p-8">
            <p className="text-blue-300 font-bold mb-3">Preferred Next Step</p>
            <h3 className="text-2xl font-black mb-4">Start with the repo or the ecosystem map.</h3>
            <p className="text-slate-300 leading-7 max-w-3xl">
              For most questions, the repo and ecosystem map are the fastest way to get context. If the discussion needs deeper technical detail, the wiki and operating model pages are the best follow-up.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/mcgr-framework/operating-model" className="inline-flex rounded-xl bg-blue-500 px-5 py-3 font-bold hover:bg-blue-600">
                Open operating model
              </Link>
              <Link href="/mcgr-framework/ecosystem" className="inline-flex rounded-xl border border-slate-600 px-5 py-3 font-bold hover:border-blue-400">
                Open ecosystem map
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <p className="text-blue-300 font-bold mb-3">Working Note</p>
          <p className="text-slate-300 leading-7 max-w-4xl">
            If you want to turn the contact page into a direct inquiry form later, we can wire it to a backend, email service, or ticketing system once you choose the preferred workflow.
          </p>
        </div>
      </section>
    </main>
  );
}
