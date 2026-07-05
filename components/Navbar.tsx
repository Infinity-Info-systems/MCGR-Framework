import Link from "next/link";

const navItems = [
  { label: "Home", href: "/mcgr-framework" },
  { label: "Ecosystem", href: "/mcgr-framework/ecosystem" },
  { label: "Publications", href: "/mcgr-framework/publications" },
  { label: "Assets", href: "/mcgr-framework/assets" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/mcgr-framework" className="group flex items-center gap-3 self-start">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-blue-400/40 bg-slate-950 shadow-lg shadow-blue-950/30">
            <img
              src="/mcgr-logo.svg"
              alt="MCGR Framework logo"
              className="h-full w-full object-contain p-1"
            />
          </div>
          <div className="min-w-0 leading-tight">
            <p className="text-xs font-semibold tracking-[0.28em] text-blue-300 uppercase sm:text-sm">
              MCGR Framework
            </p>
            <p className="text-base font-black text-white transition group-hover:text-blue-200 sm:text-lg">
              Infinity Info Systems
            </p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-2 md:justify-end">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-800/80 md:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 sm:px-6 py-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-center text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
