import Link from "next/link";

export default function BrandBar({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-blue-300 font-bold mb-4">{eyebrow}</p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight max-w-5xl mb-6">
          {title}
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-7 sm:leading-8 max-w-4xl">
          {description}
        </p>
        <div className="mt-8">
          <Link href="/mcgr-framework" className="inline-flex rounded-xl border border-slate-600 px-5 py-3 font-bold hover:border-blue-400">
            Back To MCGR Home
          </Link>
        </div>
      </div>
    </section>
  );
}
