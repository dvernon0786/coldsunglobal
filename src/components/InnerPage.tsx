'use client';
import Link from "next/link";
import { CheckCircle } from "lucide-react";

interface InnerPageProps {
  label: string;
  headline: string;
  headlineAccent?: string;
  subheadline: string;
  intro: string;
  sections: { title: string; body: string }[];
  capabilities?: string[];
  ctaHeadline: string;
  ctaBody: string;
  ctaLabel: string;
}

export default function InnerPage({
  label, headline, headlineAccent, subheadline, intro, sections, capabilities, ctaHeadline, ctaBody, ctaLabel
}: InnerPageProps) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, rgba(202,222,239,0.25), rgba(255,255,255,1))", padding: "7rem 1.5rem 5rem" }}
      >
        {/* Subtle dot above label */}
        <div className="flex mb-4">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#f68900" }} aria-hidden="true" />
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <p className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "#f68900" }}>
            {label}
          </p>
          <h1
            className="font-bold leading-tight mb-6 max-w-3xl"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)", color: "#04365f" }}
          >
            {headline}
            {headlineAccent && (
              <>
                <br />
                <span style={{ color: "#f68900" }}>{headlineAccent}</span>
              </>
            )}
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mb-10" style={{ color: "#64748b" }}>
            {subheadline}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f68900] focus:ring-offset-2"
            style={{ backgroundColor: "#f68900" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d57700")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f68900")}
          >
            Talk to an Expert →
          </Link>
        </div>
      </section>

      {/* Body */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#f68900" }}>
              Overview
            </p>
            <h2 className="font-bold mb-2" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#04365f" }}>
              What We Do
            </h2>
            <div className="w-14 h-1 rounded-full mb-6" style={{ background: "#f68900" }} />
            <p className="text-base leading-relaxed" style={{ color: "#64748b" }}>{intro}</p>
            {capabilities && (
              <div className="mt-8">
                {capabilities.map(c => (
                  <div key={c} className="flex items-center gap-3 mb-3">
                    <CheckCircle size={16} style={{ color: "#f68900", flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: "#374151" }}>{c}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            {sections.map(s => (
              <div
                key={s.title}
                className="p-6 rounded-2xl border transition-all hover:shadow-md"
                style={{ border: "1px solid #e8ecf0", background: "#ffffff" }}
              >
                <h3 className="font-bold text-base mb-2" style={{ color: "#04365f" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#04365f" }}>
        <div className="max-w-[760px] mx-auto">
          <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
            {ctaHeadline}
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>{ctaBody}</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f68900] focus:ring-offset-2 focus:ring-offset-[#04365f]"
            style={{ backgroundColor: "#f68900" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d57700")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f68900")}
          >
            {ctaLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
