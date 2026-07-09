import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Ecosystem", href: "/mcgr-framework/ecosystem" },
  { label: "Publications", href: "/mcgr-framework/publications" },
  { label: "Assets", href: "/mcgr-framework/assets" },
  { label: "Contact", href: "/mcgr-framework/contact" },
  { label: "GitHub Wiki", href: "https://github.com/Infinity-Info-systems/MCGR-Framework/wiki" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 py-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-blue-400/40 bg-slate-950">
              <Image
                src="/mcgr-logo.svg"
                alt="MCGR Framework logo"
                width={40}
                height={40}
                className="h-full w-full object-contain p-1.5"
              />
            </div>
            <div>
              <p className="text-blue-300 font-bold tracking-[0.22em] uppercase">MCGR Framework</p>
              <p className="text-sm text-slate-400">Infinity Info Systems</p>
            </div>
          </div>
          <p className="max-w-2xl text-slate-300 leading-7">
            Multi-Cloud Governance and Site Reliability Engineering for enterprise leadership, documentation, and selective showcase use.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400 mb-4">
            Quick Links
          </p>
          <div className="flex flex-wrap gap-3">
            {quickLinks.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 text-sm text-slate-500 flex flex-wrap gap-2 justify-between">
          <span>Infinity Info Systems MCGR Framework</span>
          <span>Separate showcase path for select audiences</span>
        </div>
      </div>
    </footer>
  );
}
