'use client';
import Link from "next/link";
import { CheckCircle } from "lucide-react";

interface Card { title: string; body: string; }
interface SolutionPageProps {
  label: string;
  headline: string;
  accent: string;
  subheadline: string;
  whyTitle: string;
  whyBody: string;
  whyPoints: string[];
  cards: Card[];
  stepsTitle?: string;
  steps?: Card[];
  benefitsTitle?: string;
  benefits?: Card[];
  ctaHeadline: string;
  ctaBody: string;
  ctaLabel: string;
  relatedLinks?: { label: string; href: string }[];
}

export default function SolutionPage({
  label, headline, accent, subheadline, whyTitle, whyBody, whyPoints,
  cards, stepsTitle, steps, benefitsTitle, benefits, ctaHeadline, ctaBody, ctaLabel, relatedLinks
}: SolutionPageProps) {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, rgba(202,222,239,0.25), rgba(255,255,255,1))", padding: "7rem 1.5rem 5rem" }}
      >
        <div
          className="pointer-events-none absolute top-0 right-0 rounded-full"
          style={{
            width: 500, height: 500,
            background: "radial-gradient(circle,rgba(246,137,0,0.07) 0%,transparent 70%)",
            transform: "translate(30%,-30%)",
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <p className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "#f68900" }}>
            {label}
          </p>
          <h1
            className="font-bold leading-tight mb-6 max-w-[820px]"
            style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", color: "#04365f" }}
          >
            {headline}
            <br />
            <span style={{ color: "#f68900" }}>{accent}</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mb-10" style={{ color: "#64748b" }}>
            {subheadline}
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f68900] focus:ring-offset-2"
              style={{ backgroundColor: "#f68900" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d57700")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f68900")}
            >
              {ctaLabel}
            </Link>
            {relatedLinks?.map(r => (
              <Link
                key={r.href}
                href={r.href}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold text-[14px] transition-colors hover:bg-[#0061af] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0061af] focus:ring-offset-2"
                style={{ border: "2px solid #0061af", color: "#0061af" }}
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="py-20 px-6" style={{ background: "#f8f9fb" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-18 items-center" style={{ gap: 72 }}>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#f68900" }}>
              Why It Matters
            </p>
            <h2 className="font-bold mb-2" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#04365f" }}>
              {whyTitle}
            </h2>
            <div className="w-14 h-1 rounded-full mb-6" style={{ background: "#f68900" }} />
            <p className="text-base leading-relaxed mb-7" style={{ color: "#64748b" }}>{whyBody}</p>
            <div className="flex flex-col gap-3">
              {whyPoints.map(pt => (
                <div key={pt} className="flex items-start gap-3">
                  <CheckCircle size={17} style={{ color: "#f68900", flexShrink: 0, marginTop: 2 }} />
                  <span className="text-sm" style={{ color: "#374151" }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats block */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { n:"15+", l:"Years Salesforce Experience" },
              { n:"150+", l:"Implementations Delivered" },
              { n:"4", l:"Global Delivery Regions" },
              { n:"100%", l:"Outcome-Focused Engagements" },
            ].map(s => (
              <div
                key={s.l}
                className="p-7 rounded-2xl text-center border"
                style={{ background: "#ffffff", border: "1px solid #e8ecf0" }}
              >
                <div className="font-bold leading-none mb-2" style={{ fontSize: "2.2rem", color: "#04365f" }}>
                  {s.n}
                </div>
                <div className="text-xs" style={{ color: "#64748b" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#f68900" }}>
            What We Deliver
          </p>
          <h2 className="font-bold mb-2" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#04365f" }}>
            Core Capabilities
          </h2>
          <div className="w-14 h-1 rounded-full mb-10" style={{ background: "#f68900" }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map(c => (
              <div
                key={c.title}
                className="p-8 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ border: "1px solid #e8ecf0", background: "#ffffff" }}
              >
                <h3 className="font-bold text-base mb-3" style={{ color: "#04365f" }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS (optional) */}
      {steps && steps.length > 0 && (
        <section className="py-20 px-6" style={{ background: "#f8f9fb" }}>
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#f68900" }}>
              Our Approach
            </p>
            <h2 className="font-bold mb-2" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#04365f" }}>
              {stepsTitle}
            </h2>
            <div className="w-14 h-1 rounded-full mb-10" style={{ background: "#f68900" }} />
            <div
              className="grid gap-6"
              style={{ gridTemplateColumns: `repeat(${Math.min(steps.length, 3)}, 1fr)` }}
            >
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="p-8 rounded-2xl border relative"
                  style={{ border: "1px solid #e8ecf0", background: "#ffffff" }}
                >
                  <div className="font-bold leading-none mb-3" style={{ fontSize: "2.5rem", color: "#f68900", opacity: 0.3 }}>
                    0{i + 1}
                  </div>
                  <h3 className="font-bold text-base mb-2.5" style={{ color: "#04365f" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BENEFITS (optional) */}
      {benefits && benefits.length > 0 && (
        <section className="py-20 px-6" style={{ background: "#02243f" }}>
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-bold text-white mb-2" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
              {benefitsTitle}
            </h2>
            <div className="w-14 h-1 rounded-full mb-10" style={{ background: "#f68900" }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {benefits.map(b => (
                <div
                  key={b.title}
                  className="p-7 rounded-2xl flex gap-4 items-start"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}
                >
                  <CheckCircle size={18} style={{ color: "#f68900", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1.5">{b.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#04365f" }}>
        <div className="max-w-[740px] mx-auto">
          <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
            {ctaHeadline}
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>{ctaBody}</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-9 py-4 rounded-xl font-semibold text-white text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f68900] focus:ring-offset-2 focus:ring-offset-[#04365f]"
            style={{ backgroundColor: "#f68900" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d57700")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f68900")}
          >
            Talk to an Expert →
          </Link>
        </div>
      </section>
    </>
  );
}
