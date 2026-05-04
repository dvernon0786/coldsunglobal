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
  { icon: <Globe size={20} />, title: "Truly Global Delivery", body: "Offices across North America, the UK, Netherlands, and India — matching where you sell and where you need work done." },
  { icon: <Shield size={20} />, title: "Platform-Agnostic Expertise", body: "We bring certified expertise across Salesforce, NetSuite, IFS Cloud, ServiceNow, and Sage — so the best tool wins, not the loudest partner." },
  { icon: <Zap size={20} />, title: "Speed Without Risk", body: "We pair AI-accelerated delivery with governance, architecture discipline, and 15+ years of implementation experience." },
  { icon: <Users size={20} />, title: "Led by Practitioners", body: "Erik and the Cold Sun Global leadership team have personally architected enterprise transformations — not just sold them." },
  { icon: <TrendingUp size={20} />, title: "Outcome-First Mindset", body: "Every engagement is scoped around a measurable business outcome — reduced cost, faster service, better data, or higher revenue." },
  { icon: <Award size={20} />, title: "Backed by Cold Sun Group", body: "Cold Sun Global sits above Cold Sun Capital (investments) and Cold Sun Enterprise (execution) — a vertically integrated group." },
];

const groupEntities = [
  { name: "Cold Sun Global", role: "International Brand & Presence", desc: "The name the market sees. Global positioning, partnerships, and reputation.", color: "#f68900" },
  { name: "Cold Sun Capital", role: "Ownership & Investment", desc: "Controls equity structure, investments, and financial strategy across the group.", color: "#60a5fa" },
  { name: "Cold Sun Enterprise", role: "Delivery Engine", desc: "Where the work happens. Implementation, consulting, and delivery.", color: "#34d399" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", background: "#ffffff", overflow: "hidden", padding: "6rem 1.5rem 5rem" }}>
        {/* Ambient glow top-right */}
        <div style={{ position: "absolute", top: 0, right: 0, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,137,0,0.08) 0%, transparent 70%)", transform: "translate(30%,-30%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 10 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f68900", marginBottom: 16 }}>Cold Sun Global</p>
          <h1 style={{ fontWeight: 800, fontSize: "clamp(2.5rem,5.5vw,4.2rem)", color: "#04365f", lineHeight: 1.1, marginBottom: 24, maxWidth: 740 }}>
            Outcomes,{" "}<span style={{ color: "#f68900" }}>Engineered</span> Globally.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#64748b", maxWidth: 580, marginBottom: 40, lineHeight: 1.75 }}>
            Cold Sun Global is an international enterprise transformation group — delivering Salesforce, NetSuite, IFS Cloud, and ServiceNow solutions across North America, the UK, EU, and India.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 64 }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#f68900", color: "#fff", padding: "14px 28px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#d57700")}
              onMouseLeave={e => (e.currentTarget.style.background = "#f68900")}>
              Talk to an Expert <ArrowRight size={16} />
            </Link>
            <Link href="/about" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "2px solid #0061af", color: "#0061af", padding: "12px 26px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#0061af"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0061af"; }}>
              Who We Are
            </Link>
          </div>
          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, paddingTop: 40, borderTop: "1px solid #e8ecf0" }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontWeight: 800, fontSize: "2.5rem", color: "#f68900", lineHeight: 1, marginBottom: 6 }}>{s.number}</div>
                <div style={{ fontSize: 14, color: "#64748b" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .hero-stats { grid-template-columns: repeat(2,1fr) !important; }
          }
        `}</style>
      </section>

      {/* ── CLIENT LOGO STRIP ── */}
      <section style={{ background: "#f8f9fb", borderBottom: "1px solid #e8ecf0", padding: "2.5rem 0", overflow: "hidden" }}>
        <p style={{ textAlign: "center", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: 20 }}>
          Trusted by Industry Leaders
        </p>
        <div style={{ overflow: "hidden" }}>
          <div className="animate-scroll-logos" style={{ display: "flex", gap: 16, width: "max-content" }}>
            {[...clients, ...clients].map((c, i) => (
              <div key={i} style={{ flexShrink: 0, padding: "8px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "#555", background: "#fff", border: "1px solid #e8ecf0", whiteSpace: "nowrap" }}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ── */}
      <section style={{ padding: "6rem 1.5rem", background: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f68900", marginBottom: 12 }}>What We Deliver</p>
          <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#04365f", marginBottom: 8 }}>Platform Solutions Built for Scale</h2>
          <div style={{ width: 56, height: 4, background: "#f68900", borderRadius: 2, marginBottom: 16 }} />
          <p style={{ fontSize: "1.05rem", color: "#64748b", maxWidth: 560, marginBottom: 52, lineHeight: 1.7 }}>
            We are platform-agnostic by design. The best tool for your business wins — certified across all of them.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="responsive-grid-3">
            {solutions.map(sol => (
              <Link key={sol.href} href={sol.href} style={{ display: "block", padding: 32, borderRadius: 16, border: "1px solid #e8ecf0", background: "#fff", textDecoration: "none", transition: "box-shadow 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(4,54,95,0.10)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{sol.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "#04365f", marginBottom: 12 }}>{sol.title}</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: 16 }}>{sol.desc}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontWeight: 600, fontSize: 14, color: "#f68900" }}>
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY COLD SUN ── */}
      <section style={{ padding: "6rem 1.5rem", background: "#f8f9fb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="responsive-flex-col">
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f68900", marginBottom: 12 }}>Why Cold Sun Global</p>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#04365f", marginBottom: 24, lineHeight: 1.2 }}>Built for Outcomes.<br />Trusted for Delivery.</h2>
            <p style={{ fontSize: "1.05rem", color: "#64748b", lineHeight: 1.7, marginBottom: 32 }}>
              For over 15 years, the Cold Sun Group has delivered complex transformations for organizations that take service seriously. Cold Sun Global brings that track record to international markets.
            </p>
            {["Salesforce Summit-level expertise","SOC 2 Type II certified operations","5 enterprise platforms, one team","India delivery hub for cost efficiency","Presence in NA, UK, Netherlands, India"].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <CheckCircle size={17} style={{ color: "#f68900", flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: "#374151" }}>{item}</span>
              </div>
            ))}
            <Link href="/about" style={{ display: "inline-block", marginTop: 32, background: "#f68900", color: "#fff", padding: "14px 28px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#d57700")}
              onMouseLeave={e => (e.currentTarget.style.background = "#f68900")}>
              Meet the Team →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {whyUs.map(w => (
              <div key={w.title} style={{ padding: 24, borderRadius: 16, background: "#fff", border: "1px solid #e8ecf0" }}>
                <div style={{ color: "#f68900", marginBottom: 12 }}>{w.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#04365f", marginBottom: 8 }}>{w.title}</h4>
                <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.65 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES BAR ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#04365f" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f68900", marginBottom: 12 }}>How We Engage</p>
          <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#ffffff", marginBottom: 40 }}>End-to-End Service Coverage</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {services.map(s => (
              <Link key={s.href} href={s.href} style={{ padding: "10px 22px", borderRadius: 50, fontSize: 14, fontWeight: 600, border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ padding: "6rem 1.5rem", background: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f68900", marginBottom: 12 }}>Industries We Serve</p>
          <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#04365f", marginBottom: 8 }}>Deep Vertical Knowledge Across 10 Industries</h2>
          <div style={{ width: 56, height: 4, background: "#f68900", borderRadius: 2, marginBottom: 48 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }} className="responsive-grid-5">
            {industries.map(ind => (
              <Link key={ind.href} href={ind.href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: 20, borderRadius: 16, border: "1px solid #e8ecf0", background: "#fff" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(4,54,95,0.08)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}>
                <span style={{ fontWeight: 600, fontSize: 13, color: "#374151" }}>{ind.name}</span>
                <ArrowRight size={14} style={{ marginTop: 8, color: "#cadeef" }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROUP STRUCTURE ── */}
      <section style={{ padding: "6rem 1.5rem", background: "#02243f" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f68900", marginBottom: 12 }}>The Cold Sun Group</p>
          <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#ffffff", marginBottom: 16 }}>One Brand. Three Entities. One Goal.</h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.55)", maxWidth: 540, margin: "0 auto 56px", lineHeight: 1.7 }}>
            The Cold Sun Group operates through a disciplined three-layer structure — designed for global scale, clean ownership, and focused delivery.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, maxWidth: 960, margin: "0 auto" }} className="responsive-grid-3">
            {groupEntities.map(e => (
              <div key={e.name} style={{ padding: 32, borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", textAlign: "left" }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: e.color, marginBottom: 8 }}>{e.role}</div>
                <h3 style={{ fontWeight: 700, fontSize: "1.2rem", color: "#ffffff", marginBottom: 12 }}>{e.name}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ERIK CTA ── */}
      <section style={{ padding: "6rem 1.5rem", background: "#f8f9fb" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", gap: 64 }} className="responsive-flex-col">
          <div style={{ flexShrink: 0, width: 112, height: 112, borderRadius: "50%", background: "#04365f", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "2.5rem", color: "#ffffff" }}>E</div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f68900", marginBottom: 8 }}>Strategy Sessions with Erik</p>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#04365f", marginBottom: 16 }}>45 Minutes. No Slides. Real Insight.</h2>
            <p style={{ fontSize: "1.05rem", color: "#64748b", lineHeight: 1.7, marginBottom: 24 }}>
              Erik personally leads every initial strategy call. You&apos;ll walk away with a migration roadmap, ROI projection, and a clear picture of your next 12 weeks — whether you work with us or not.
            </p>
            <div style={{ display: "flex", gap: 24, marginBottom: 28, flexWrap: "wrap" }}>
              {["✓ 15 Years FSM & ERP Experience","✓ 150+ Implementations","✓ No Sales Pressure"].map(i => (
                <span key={i} style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{i}</span>
              ))}
            </div>
            <Link href="/contact" style={{ display: "inline-block", background: "#f68900", color: "#fff", padding: "14px 28px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#d57700")}
              onMouseLeave={e => (e.currentTarget.style.background = "#f68900")}>
              Schedule a Session with Erik →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
