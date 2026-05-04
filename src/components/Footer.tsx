import Link from "next/link";
import { Globe, Mail, ExternalLink, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      {/* CTA band */}
      <div className="py-20 px-6 text-center" style={{ backgroundColor: "#04365f" }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f68900" }}>
          Ready to Transform?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Let&apos;s Build Something That Lasts
        </h2>
        <p className="text-white/80 text-lg max-w-lg mx-auto mb-8 leading-relaxed">
          Speak with Erik and the Cold Sun Global team. No sales pressure — just expert insight on your next transformation.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-[#04365f] bg-white transition-all hover:bg-[#f0f6fc] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#04365f]"
        >
          Schedule a Strategy Session →
        </Link>
      </div>

      {/* Links grid */}
      <div className="px-6 py-20" style={{ backgroundColor: "#02243f" }}>
        <div className="max-w-[1200px] mx-auto grid gap-12" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>

          {/* Brand column */}
          <div>
            <img src="/coldsunglobal_logo-footer.png" alt="Cold Sun Global" className="h-12 w-auto mb-4" />
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              The global umbrella brand of the Cold Sun Group — delivering enterprise transformation across North America, UK, EU, and India.
            </p>
            <div className="flex gap-2.5 mb-5">
              {[ExternalLink, Share2, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <Icon size={14} color="rgba(255,255,255,0.65)" />
                </a>
              ))}
            </div>
            <div>
              {[["Cold Sun Enterprise","https://coldsunenterprise.com"],["Cold Sun Capital","https://coldsuncapital.com"]].map(([n,u]) => (
                <a
                  key={u}
                  href={u}
                  target="_blank"
                  rel="noopener"
                  className="block text-xs mb-1.5 transition-colors hover:text-white/60"
                  style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
                >
                  ↗ {n}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "#f68900" }}>Solutions</p>
            {[
              ["Salesforce","/solutions/salesforce"],
              ["Agentforce & AI","/solutions/agentforce"],
              ["Field Service","/solutions/field-service"],
              ["NetSuite ERP","/solutions/erp"],
              ["ServiceNow","/solutions/servicenow"],
              ["Revenue Management","/solutions/revenue-management"],
            ].map(([l,h]) => (
              <Link
                key={l}
                href={h}
                className="block text-sm mb-2 transition-colors hover:text-white/80"
                style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
              >
                {l}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "#f68900" }}>Services</p>
            {[
              ["Consulting","/services/consulting"],
              ["Implementation","/services/implementation"],
              ["Managed Services","/services/managed-services"],
              ["Change Management","/services/change-management"],
              ["Training","/services/training"],
              ["Talent Management","/services/talent-management"],
            ].map(([l,h]) => (
              <Link
                key={l}
                href={h}
                className="block text-sm mb-2 transition-colors hover:text-white/80"
                style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
              >
                {l}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "#f68900" }}>Contact</p>
            <div className="flex gap-2 mb-3 items-start">
              <Mail size={14} style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0, marginTop: 2 }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>info@coldsunglobal.com</span>
            </div>
            <div className="flex gap-2 items-start">
              <Globe size={14} style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0, marginTop: 2 }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>NA · UK · EU · India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-6 py-5 flex items-center justify-between flex-wrap gap-3"
        style={{ backgroundColor: "#02243f", borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          © {new Date().getFullYear()} Cold Sun Global. All rights reserved. Part of the Cold Sun Group.
        </p>
        <div className="flex gap-6">
          {[["Privacy Policy","#"],["Terms of Use","#"],["Careers","/about#careers"]].map(([l,h]) => (
            <Link
              key={l}
              href={h}
              className="text-xs transition-colors hover:text-white/60"
              style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
