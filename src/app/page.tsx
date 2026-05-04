'use client';
import Link from "next/link";
import { ArrowRight, CheckCircle, Globe, TrendingUp, Shield, Zap, Users, Award } from "lucide-react";

const clients = [
  "Philips Healthcare","Enbridge","Rogers","Bell","Spire Energy","Atos",
  "Henry Schein","Capita","Cognizant","Konica Minolta","Chiltern Council",
  "Pacific Power","Dynamic SLR","Bowline Health","Newfoundland Power","WireOne",
];

const stats = [
  { number: "15+", label: "Years of Delivery" },
  { number: "150+", label: "Implementations" },
  { number: "4", label: "Global Regions" },
  { number: "5", label: "Platforms Mastered" },
];

const solutions = [
  { icon: "⚡", title: "Salesforce & Agentforce", desc: "Full-stack Salesforce transformation — CRM, Field Service, Revenue Management, and AI-powered agents that reduce manual work and accelerate decisions.", href: "/solutions/salesforce" },
  { icon: "🏗️", title: "NetSuite & ERP", desc: "NetSuite, IFS Cloud, and Sage Intacct implementations built for mid-market and enterprise — clean data, connected operations, real-time visibility.", href: "/solutions/erp" },
  { icon: "🔧", title: "ServiceNow", desc: "End-to-end ServiceNow deployments for IT service management, HR, and enterprise workflows — modernizing how your teams work at scale.", href: "/solutions/servicenow" },
  { icon: "🤖", title: "AI & Agentforce", desc: "Deploy AI agents that autonomously handle service requests, dispatch field workers, and optimize revenue — backed by governed, enterprise-grade architecture.", href: "/solutions/agentforce" },
  { icon: "🌐", title: "Field Service Management", desc: "15+ years architecting field service for utilities, telecom, and healthcare. From ClickSoftware migrations to fully AI-enabled dispatch.", href: "/solutions/field-service" },
  { icon: "📊", title: "Revenue Management", desc: "Streamline billing, subscriptions, quoting, and CPQ on Salesforce — reducing revenue leakage and accelerating cash conversion cycles.", href: "/solutions/revenue-management" },
];

const services = [
  { title: "Consulting", href: "/services/consulting" },
  { title: "Implementation & Integration", href: "/services/implementation" },
  { title: "Managed & Advisory", href: "/services/managed-services" },
  { title: "Change Management", href: "/services/change-management" },
  { title: "Migration Services", href: "/services/migration" },
  { title: "Training", href: "/services/training" },
  { title: "Talent Management", href: "/services/talent-management" },
];

const industries = [
  { name: "Energy & Oil & Gas", href: "/industries/energy" },
  { name: "Healthcare & Life Sciences", href: "/industries/healthcare" },
  { name: "Telecommunications", href: "/industries/telecom" },
  { name: "Manufacturing", href: "/industries/manufacturing" },
  { name: "Professional Services", href: "/industries/professional-services" },
  { name: "High Technology & IT", href: "/industries/high-tech" },
  { name: "Utilities", href: "/industries/utilities" },
  { name: "Education", href: "/industries/education" },
  { name: "Nonprofit", href: "/industries/nonprofit" },
  { name: "Home & Business Services", href: "/industries/home-services" },
];

const whyUs = [
  { icon: <Globe size={22} />, title: "Truly Global Delivery", body: "Offices across North America, the UK, Netherlands, and India — matching where you sell and where you need work done." },
  { icon: <Shield size={22} />, title: "Platform-Agnostic Expertise", body: "We bring certified expertise across Salesforce, NetSuite, IFS Cloud, ServiceNow, and Sage — so the best tool wins, not the loudest partner." },
  { icon: <Zap size={22} />, title: "Speed Without Risk", body: "We pair AI-accelerated delivery with governance, architecture discipline, and 15+ years of implementation experience." },
  { icon: <Users size={22} />, title: "Led by Practitioners", body: "Erik and the Cold Sun Global leadership team have personally architected enterprise transformations — not just sold them." },
  { icon: <TrendingUp size={22} />, title: "Outcome-First Mindset", body: "Every engagement is scoped around a measurable business outcome — reduced cost, faster service, better data, or higher revenue." },
  { icon: <Award size={22} />, title: "Backed by Cold Sun Group", body: "Cold Sun Global sits above Cold Sun Capital (investments) and Cold Sun Enterprise (execution) — a vertically integrated group." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-white overflow-hidden" style={{ padding: "7rem 1.5rem 5rem" }}>
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #e5e7eb 2px, #e5e7eb 4px)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(246,137,0,0.08) 0%, transparent 70%)",
            transform: "translate(30%,-30%)",
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#f68900" }}>
            Cold Sun Global
          </p>
          <h1
            className="font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", color: "#04365f" }}
          >
            Outcomes,{" "}
            <span style={{ color: "#f68900" }}>Engineered</span> Globally.
          </h1>
          <p
            className="text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "#64748b" }}
          >
            Cold Sun Global is an international enterprise transformation group — delivering Salesforce, NetSuite, IFS Cloud, and ServiceNow solutions across North America, the UK, EU, and India.
          </p>
          <div className="flex gap-4 flex-wrap mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f68900] focus:ring-offset-2"
              style={{ backgroundColor: "#f68900" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d57700")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f68900")}
            >
              Talk to an Expert <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0061af] focus:ring-offset-2 hover:bg-[#0061af] hover:text-white"
              style={{ border: "2px solid #0061af", color: "#0061af" }}
            >
              Who We Are
            </Link>
          </div>

          {/* Stats */}
          <div
            className="grid gap-8 pt-10"
            style={{
              gridTemplateColumns: "repeat(4,1fr)",
              borderTop: "1px solid #e8ecf0",
            }}
          >
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-bold leading-none mb-2" style={{ fontSize: "2.5rem", color: "#f68900" }}>
                  {s.number}
                </div>
                <div className="text-sm" style={{ color: "#64748b" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGO STRIP */}
      <section className="py-10 overflow-hidden" style={{ background: "#f8f9fb", borderBottom: "1px solid #e8ecf0" }}>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-center mb-5" style={{ color: "#999" }}>
          Trusted by Industry Leaders
        </p>
        <div className="overflow-hidden relative">
          <div className="animate-scroll-logos flex gap-6" style={{ width: "max-content" }}>
            {[...clients, ...clients].map((c, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-5 py-2 rounded-lg text-[13px] font-semibold whitespace-nowrap"
                style={{
                  color: "#555",
                  background: "#ffffff",
                  border: "1px solid #e8ecf0",
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#f68900" }}>
            What We Deliver
          </p>
          <h2 className="font-bold mb-2" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#04365f" }}>
            Platform Solutions Built for Scale
          </h2>
          <div className="w-14 h-1 rounded-full mb-4" style={{ background: "#f68900" }} />
          <p className="text-lg leading-relaxed max-w-lg mb-14" style={{ color: "#64748b" }}>
            We are platform-agnostic by design. The best tool for your business wins — certified across all of them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map(sol => (
              <Link
                key={sol.href}
                href={sol.href}
                className="block p-8 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0061af] focus:ring-offset-2"
                style={{ border: "1px solid #e8ecf0", background: "#ffffff", textDecoration: "none" }}
              >
                <div className="text-3xl mb-4">{sol.icon}</div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "#04365f" }}>{sol.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>{sol.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "#f68900" }}>
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY COLD SUN */}
      <section className="py-24 px-6" style={{ background: "#f8f9fb" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#f68900" }}>
              Why Cold Sun Global
            </p>
            <h2 className="font-bold mb-6 leading-tight" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#04365f" }}>
              Built for Outcomes.<br />Trusted for Delivery.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#64748b" }}>
              For over 15 years, the Cold Sun Group has delivered complex transformations for organizations that take service seriously. Cold Sun Global brings that track record to international markets.
            </p>
            {[
              "Salesforce Summit-level expertise",
              "SOC 2 Type II certified operations",
              "5 enterprise platforms, one team",
              "India delivery hub for cost efficiency",
              "Presence in NA, UK, Netherlands, India",
            ].map(item => (
              <div key={item} className="flex items-center gap-3 mb-3">
                <CheckCircle size={17} style={{ color: "#f68900", flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "#374151" }}>{item}</span>
              </div>
            ))}
            <Link
              href="/about"
              className="inline-flex items-center justify-center mt-8 px-7 py-3.5 rounded-lg font-semibold text-[15px] text-white transition-colors"
              style={{ backgroundColor: "#f68900" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d57700")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f68900")}
            >
              Meet the Team →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {whyUs.map(w => (
              <div
                key={w.title}
                className="p-6 rounded-2xl border transition-all hover:shadow-md"
                style={{ background: "#ffffff", border: "1px solid #e8ecf0" }}
              >
                <div className="mb-3" style={{ color: "#f68900" }}>{w.icon}</div>
                <h4 className="font-bold text-sm mb-2" style={{ color: "#04365f" }}>{w.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES BAR */}
      <section className="py-20 px-6" style={{ background: "#04365f" }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#f68900" }}>
            How We Engage
          </p>
          <h2 className="font-bold mb-10 text-white" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
            End-to-End Service Coverage
          </h2>
          <div className="flex flex-wrap gap-3">
            {services.map(s => (
              <Link
                key={s.href}
                href={s.href}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#04365f]"
                style={{ border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none" }}
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#f68900" }}>
            Industries We Serve
          </p>
          <h2 className="font-bold mb-2" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#04365f" }}>
            Deep Vertical Knowledge Across 10 Industries
          </h2>
          <div className="w-14 h-1 rounded-full mb-12" style={{ background: "#f68900" }} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map(ind => (
              <Link
                key={ind.href}
                href={ind.href}
                className="flex flex-col items-center text-center p-5 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0061af] focus:ring-offset-2"
                style={{ border: "1px solid #e8ecf0", background: "#ffffff", textDecoration: "none" }}
              >
                <span className="text-sm font-semibold mb-2" style={{ color: "#374151" }}>{ind.name}</span>
                <ArrowRight size={14} style={{ color: "#cadeef" }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GROUP STRUCTURE */}
      <section className="py-24 px-6" style={{ background: "#02243f" }}>
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#f68900" }}>
            The Cold Sun Group
          </p>
          <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
            One Brand. Three Entities. One Goal.
          </h2>
          <p className="text-lg leading-relaxed max-w-lg mx-auto mb-14" style={{ color: "rgba(255,255,255,0.55)" }}>
            The Cold Sun Group operates through a disciplined three-layer structure — designed for global scale, clean ownership, and focused delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Cold Sun Global", role: "International Brand & Presence", desc: "The name the market sees. Global positioning, partnerships, and reputation.", color: "#f68900" },
              { name: "Cold Sun Capital", role: "Ownership & Investment", desc: "Controls equity structure, investments, and financial strategy across the group.", color: "#60a5fa" },
              { name: "Cold Sun Enterprise", role: "Delivery Engine", desc: "Where the work happens. Implementation, consulting, and delivery.", color: "#34d399" },
            ].map(e => (
              <div
                key={e.name}
                className="p-8 rounded-2xl text-left"
                style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}
              >
                <div className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: e.color }}>
                  {e.role}
                </div>
                <h3 className="font-bold text-white text-xl mb-3">{e.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERIK CTA */}
      <section className="py-24 px-6" style={{ background: "#f8f9fb" }}>
        <div className="max-w-[900px] mx-auto flex items-center gap-16 flex-wrap md:flex-nowrap">
          <div
            className="flex-shrink-0 w-28 h-28 rounded-full flex items-center justify-center font-bold text-white text-4xl"
            style={{ background: "#04365f" }}
          >
            E
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "#f68900" }}>
              Strategy Sessions with Erik
            </p>
            <h2 className="font-bold mb-4 leading-tight" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#04365f" }}>
              45 Minutes. No Slides. Real Insight.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#64748b" }}>
              Erik personally leads every initial strategy call. You&apos;ll walk away with a migration roadmap, ROI projection, and a clear picture of your next 12 weeks — whether you work with us or not.
            </p>
            <div className="flex gap-6 flex-wrap mb-7">
              {["✓ 15 Years FSM & ERP Experience","✓ 150+ Implementations","✓ No Sales Pressure"].map(i => (
                <span key={i} className="text-sm font-medium" style={{ color: "#374151" }}>{i}</span>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-[15px] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#f68900] focus:ring-offset-2"
              style={{ backgroundColor: "#f68900" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d57700")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f68900")}
            >
              Schedule a Session with Erik →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
