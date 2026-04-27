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

const S = {
  navy: "#04365f",
  navyDeep: "#02243f",
  orange: "#f68900",
  offWhite: "#f8f9fb",
  white: "#ffffff",
  grey: "#4a5568",
  greyLight: "#e8ecf0",
  font: "'DM Sans', sans-serif",
  display: "'Playfair Display', serif",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: S.navy, position: "relative", overflow: "hidden", padding: "7rem 1.5rem 5rem" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,137,0,0.15) 0%, transparent 70%)", transform: "translate(30%,-30%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: S.font, fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: S.orange, marginBottom: 16 }}>Cold Sun Global</p>
          <h1 style={{ fontFamily: S.display, fontWeight: 800, fontSize: "clamp(2.5rem,6vw,4.5rem)", color: S.white, lineHeight: 1.1, marginBottom: 24 }}>
            Outcomes,<br /><span style={{ color: S.orange }}>Engineered</span> Globally.
          </h1>
          <p style={{ fontFamily: S.font, fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", maxWidth: 640, marginBottom: 40, lineHeight: 1.7 }}>
            Cold Sun Global is an international enterprise transformation group — delivering Salesforce, NetSuite, IFS Cloud, and ServiceNow solutions across North America, the UK, EU, and India.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: S.orange, color: S.white, padding: "14px 28px", borderRadius: 8, fontFamily: S.font, fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Talk to an Expert <ArrowRight size={16} />
            </Link>
            <Link href="/about" style={{ border: "2px solid rgba(255,255,255,0.5)", color: S.white, padding: "12px 26px", borderRadius: 8, fontFamily: S.font, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              Who We Are
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, marginTop: 64, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: S.display, fontSize: "2.5rem", fontWeight: 800, color: S.orange, lineHeight: 1 }}>{s.number}</div>
                <div style={{ fontFamily: S.font, color: "rgba(255,255,255,0.6)", fontSize: 14, marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGO STRIP */}
      <section style={{ background: S.offWhite, padding: "2.5rem 0", borderBottom: `1px solid ${S.greyLight}`, overflow: "hidden" }}>
        <p style={{ fontFamily: S.font, fontWeight: 600, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#999", textAlign: "center", marginBottom: 20 }}>Trusted by Industry Leaders</p>
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div className="animate-scroll-logos" style={{ display: "flex", gap: 24, width: "max-content" }}>
            {[...clients, ...clients].map((c, i) => (
              <div key={i} style={{ flexShrink: 0, padding: "8px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "#555", background: S.white, border: `1px solid ${S.greyLight}`, whiteSpace: "nowrap", fontFamily: S.font }}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section style={{ padding: "6rem 1.5rem", background: S.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: S.font, fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: S.orange, marginBottom: 12 }}>What We Deliver</p>
          <h2 style={{ fontFamily: S.display, fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: S.navy, marginBottom: 8 }}>Platform Solutions Built for Scale</h2>
          <div style={{ width: 56, height: 4, background: S.orange, borderRadius: 2, marginBottom: 16 }} />
          <p style={{ fontFamily: S.font, color: S.grey, fontSize: "1.1rem", maxWidth: 580, marginBottom: 56 }}>We are platform-agnostic by design. The best tool for your business wins — certified across all of them.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {solutions.map(sol => (
              <Link key={sol.href} href={sol.href} style={{ textDecoration: "none", display: "block", padding: 32, borderRadius: 16, border: `1px solid ${S.greyLight}`, background: S.white, transition: "box-shadow 0.2s" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{sol.icon}</div>
                <h3 style={{ fontFamily: S.display, fontWeight: 700, fontSize: "1.1rem", color: S.navy, marginBottom: 12 }}>{sol.title}</h3>
                <p style={{ fontFamily: S.font, color: S.grey, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{sol.desc}</p>
                <span style={{ fontFamily: S.font, fontWeight: 600, fontSize: 14, color: S.orange, display: "flex", alignItems: "center", gap: 4 }}>Learn more <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY COLD SUN */}
      <section style={{ padding: "6rem 1.5rem", background: S.offWhite }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: S.font, fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: S.orange, marginBottom: 12 }}>Why Cold Sun Global</p>
            <h2 style={{ fontFamily: S.display, fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: S.navy, marginBottom: 24, lineHeight: 1.2 }}>Built for Outcomes.<br />Trusted for Delivery.</h2>
            <p style={{ fontFamily: S.font, color: S.grey, fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 32 }}>
              For over 15 years, the Cold Sun Group has delivered complex transformations for organizations that take service seriously. Cold Sun Global brings that track record to international markets.
            </p>
            {["Salesforce Summit-level expertise","SOC 2 Type II certified operations","5 enterprise platforms, one team","India delivery hub for cost efficiency","Presence in NA, UK, Netherlands, India"].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <CheckCircle size={17} style={{ color: S.orange, flexShrink: 0 }} />
                <span style={{ fontFamily: S.font, color: "#374151", fontSize: 14 }}>{item}</span>
              </div>
            ))}
            <Link href="/about" style={{ display: "inline-block", marginTop: 32, background: S.orange, color: S.white, padding: "14px 28px", borderRadius: 8, fontFamily: S.font, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Meet the Team →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {whyUs.map(w => (
              <div key={w.title} style={{ padding: 24, borderRadius: 16, background: S.white, border: `1px solid ${S.greyLight}` }}>
                <div style={{ color: S.orange, marginBottom: 12 }}>{w.icon}</div>
                <h4 style={{ fontFamily: S.display, fontWeight: 700, fontSize: "0.95rem", color: S.navy, marginBottom: 8 }}>{w.title}</h4>
                <p style={{ fontFamily: S.font, fontSize: 12, color: S.grey, lineHeight: 1.6 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES BAR */}
      <section style={{ padding: "5rem 1.5rem", background: S.navy }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: S.font, fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: S.orange, marginBottom: 12 }}>How We Engage</p>
          <h2 style={{ fontFamily: S.display, fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: S.white, marginBottom: 40 }}>End-to-End Service Coverage</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {services.map(s => (
              <Link key={s.href} href={s.href} style={{ padding: "10px 22px", borderRadius: 50, fontSize: 14, fontWeight: 600, border: "1px solid rgba(255,255,255,0.25)", color: S.white, textDecoration: "none", fontFamily: S.font }}>
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: "6rem 1.5rem", background: S.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: S.font, fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: S.orange, marginBottom: 12 }}>Industries We Serve</p>
          <h2 style={{ fontFamily: S.display, fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: S.navy, marginBottom: 8 }}>Deep Vertical Knowledge Across 10 Industries</h2>
          <div style={{ width: 56, height: 4, background: S.orange, borderRadius: 2, marginBottom: 48 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }}>
            {industries.map(ind => (
              <Link key={ind.href} href={ind.href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: 20, borderRadius: 16, border: `1px solid ${S.greyLight}`, background: S.white }}>
                <span style={{ fontFamily: S.font, fontWeight: 600, fontSize: 13, color: "#374151" }}>{ind.name}</span>
                <ArrowRight size={14} style={{ marginTop: 8, color: "#d1d5db" }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GROUP STRUCTURE */}
      <section style={{ padding: "6rem 1.5rem", background: S.navyDeep }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: S.font, fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: S.orange, marginBottom: 12 }}>The Cold Sun Group</p>
          <h2 style={{ fontFamily: S.display, fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: S.white, marginBottom: 16 }}>One Brand. Three Entities. One Goal.</h2>
          <p style={{ fontFamily: S.font, color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", maxWidth: 560, margin: "0 auto 56px" }}>
            The Cold Sun Group operates through a disciplined three-layer structure — designed for global scale, clean ownership, and focused delivery.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, maxWidth: 960, margin: "0 auto" }}>
            {[
              { name: "Cold Sun Global", role: "International Brand & Presence", desc: "The name the market sees. Global positioning, partnerships, and reputation.", color: S.orange },
              { name: "Cold Sun Capital", role: "Ownership & Investment", desc: "Controls equity structure, investments, and financial strategy across the group.", color: "#60a5fa" },
              { name: "Cold Sun Enterprise", role: "Delivery Engine", desc: "Where the work happens. Implementation, consulting, and delivery.", color: "#34d399" },
            ].map(e => (
              <div key={e.name} style={{ padding: 32, borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", textAlign: "left" }}>
                <div style={{ fontFamily: S.font, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: e.color, marginBottom: 8 }}>{e.role}</div>
                <h3 style={{ fontFamily: S.display, fontWeight: 700, fontSize: "1.25rem", color: S.white, marginBottom: 12 }}>{e.name}</h3>
                <p style={{ fontFamily: S.font, fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERIK CTA */}
      <section style={{ padding: "6rem 1.5rem", background: S.offWhite }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", gap: 64 }}>
          <div style={{ flexShrink: 0, width: 112, height: 112, borderRadius: "50%", background: S.navy, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: S.display, fontSize: "2.5rem", fontWeight: 800, color: S.white }}>E</div>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: S.font, fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: S.orange, marginBottom: 8 }}>Strategy Sessions with Erik</p>
            <h2 style={{ fontFamily: S.display, fontWeight: 700, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: S.navy, marginBottom: 16 }}>45 Minutes. No Slides. Real Insight.</h2>
            <p style={{ fontFamily: S.font, color: S.grey, fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 24 }}>
              Erik personally leads every initial strategy call. You&apos;ll walk away with a migration roadmap, ROI projection, and a clear picture of your next 12 weeks — whether you work with us or not.
            </p>
            <div style={{ display: "flex", gap: 24, marginBottom: 28, flexWrap: "wrap" }}>
              {["✓ 15 Years FSM & ERP Experience","✓ 150+ Implementations","✓ No Sales Pressure"].map(i => (
                <span key={i} style={{ fontFamily: S.font, fontSize: 14, color: "#374151", fontWeight: 500 }}>{i}</span>
              ))}
            </div>
            <Link href="/contact" style={{ display: "inline-block", background: S.orange, color: S.white, padding: "14px 28px", borderRadius: 8, fontFamily: S.font, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Schedule a Session with Erik →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
