"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import BrandBar from "../../../components/BrandBar";

const contactEmail = "rameshmarella@infinityinfosystems.com";

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

type FormState = {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  company: "",
  inquiryType: inquiryTypes[0],
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<string | null>(null);

  const mailtoHref = useMemo(() => {
    const subject = `MCGR Inquiry: ${form.inquiryType || "General"}`;
    const body = [
      `Name: ${form.name || "Not provided"}`,
      `Email: ${form.email || "Not provided"}`,
      `Company: ${form.company || "Not provided"}`,
      `Inquiry Type: ${form.inquiryType || "Not provided"}`,
      "",
      form.message || "No message provided.",
    ].join("\n");

    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please add your name, email, and message before sending.");
      return;
    }

    setStatus(null);
    window.location.href = mailtoHref;
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <BrandBar
        eyebrow="MCGR Contact"
        title="How To Reach The MCGR Framework."
        description="Use this page to find the right reference path for the framework, supporting repos, and the deeper technical material."
      />

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
            <h3 className="text-2xl font-black mb-4">Send a note directly to rameshmarella@infinityinfosystems.com.</h3>
            <p className="text-slate-300 leading-7 max-w-3xl">
              Fill out the form and it will open your mail app with the details prefilled. Name, email, and message are required so the inquiry has enough context to follow up.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="block text-sm font-semibold text-slate-300">Name</span>
                  <input
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                    placeholder="Your name"
                  />
                </label>
                <label className="space-y-2">
                  <span className="block text-sm font-semibold text-slate-300">Email</span>
                  <input
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    type="email"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="space-y-2 block">
                <span className="block text-sm font-semibold text-slate-300">Company / Organization</span>
                <input
                  value={form.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                  placeholder="Organization name"
                />
              </label>

              <label className="space-y-2 block">
                <span className="block text-sm font-semibold text-slate-300">Inquiry Type</span>
                <select
                  value={form.inquiryType}
                  onChange={(event) => updateField("inquiryType", event.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-400"
                >
                  {inquiryTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 block">
                <span className="block text-sm font-semibold text-slate-300">Message</span>
                <textarea
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  rows={6}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                  placeholder="Tell us what you want to discuss."
                />
              </label>

              {status ? (
                <p className="rounded-2xl border border-amber-400/40 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
                  {status}
                </p>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex rounded-xl bg-blue-500 px-5 py-3 font-bold hover:bg-blue-600"
                >
                  Open Email Draft
                </button>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex rounded-xl border border-slate-600 px-5 py-3 font-bold hover:border-blue-400"
                >
                  Send to {contactEmail}
                </a>
              </div>
            </form>
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
      </section>
    </main>
  );
}
