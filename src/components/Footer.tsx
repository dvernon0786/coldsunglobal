import Link from "next/link";
import { Globe, Mail, ExternalLink, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      {/* ── CTA BAND ── */}
      <div style={{ background: "#04365f", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f68900", marginBottom: 12 }}>Ready to Transform?</p>
        <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#ffffff", marginBottom: 16 }}>Let&apos;s Build Something That Lasts</h2>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>
          Speak with Erik and the Cold Sun Global team. No sales pressure — just expert insight on your next transformation.
        </p>
        <Link href="/contact" style={{ display: "inline-block", background: "#ffffff", color: "#04365f", padding: "16px 32px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
          Schedule a Strategy Session →
        </Link>
      </div>

      {/* ── LINKS GRID ── */}
      <div style={{ background: "#02243f", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }} className="responsive-grid-4">

          {/* Brand column */}
          <div>
            <img src="/coldsunglobal_logo.svg" alt="Cold Sun Global" style={{ height: 44, width: "auto", marginBottom: 16 }} />
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 20 }}>
              The global umbrella brand of the Cold Sun Group — delivering enterprise transformation across North America, UK, EU, and India.
            </p>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              {[ExternalLink, Share2, Globe].map((Icon, i) => (
                <a key={i} href="#" style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                  <Icon size={14} color="rgba(255,255,255,0.65)" />
                </a>
              ))}
            </div>
            <div>
              {[["Cold Sun Enterprise","https://coldsunenterprise.com"],["Cold Sun Capital","https://coldsuncapital.com"]].map(([n,u]) => (
                <a key={u} href={u} target="_blank" rel="noopener" style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", marginBottom: 6 }}>↗ {n}</a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#f68900", marginBottom: 16 }}>Solutions</p>
            {[["Salesforce","/solutions/salesforce"],["Agentforce & AI","/solutions/agentforce"],["Field Service","/solutions/field-service"],["NetSuite ERP","/solutions/erp"],["ServiceNow","/solutions/servicenow"],["Revenue Management","/solutions/revenue-management"]].map(([l,h]) => (
              <Link key={l} href={h} style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: 8 }}>{l}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#f68900", marginBottom: 16 }}>Services</p>
            {[["Consulting","/services/consulting"],["Implementation","/services/implementation"],["Managed Services","/services/managed-services"],["Change Management","/services/change-management"],["Training","/services/training"],["Talent Management","/services/talent-management"]].map(([l,h]) => (
              <Link key={l} href={h} style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: 8 }}>{l}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#f68900", marginBottom: 16 }}>Contact</p>
            <div style={{ display: "flex", gap: 8, marginBottom: 12, alignItems: "flex-start" }}>
              <Mail size={14} style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>info@coldsunglobal.com</span>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <Globe size={14} style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>NA · UK · EU · India</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ background: "#02243f", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>© {new Date().getFullYear()} Cold Sun Global. All rights reserved. Part of the Cold Sun Group.</p>
        <div style={{ display: "flex", gap: 24 }}>
          {[["Privacy Policy","#"],["Terms of Use","#"],["Careers","/about#careers"]].map(([l,h]) => (
            <Link key={l} href={h} style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>{l}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
