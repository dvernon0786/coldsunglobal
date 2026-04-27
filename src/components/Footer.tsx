import Link from "next/link";
import { Globe, Mail, ExternalLink, Share2 } from "lucide-react";

const S = { navy:"#04365f", navyDeep:"#02243f", orange:"#f68900", white:"#ffffff", font:"'DM Sans',sans-serif", display:"'Playfair Display',serif" };

export default function Footer() {
  return (
    <footer>
      {/* Orange CTA band */}
      <div style={{ background:S.orange, padding:"5rem 1.5rem", textAlign:"center" }}>
        <p style={{ fontFamily:S.font, fontWeight:600, fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", color:S.navy, marginBottom:12 }}>Ready to Transform?</p>
        <h2 style={{ fontFamily:S.display, fontWeight:700, fontSize:"clamp(1.8rem,3vw,2.5rem)", color:S.white, marginBottom:16 }}>Let&apos;s Build Something That Lasts</h2>
        <p style={{ fontFamily:S.font, color:"rgba(255,255,255,0.9)", fontSize:"1.1rem", maxWidth:520, margin:"0 auto 32px" }}>
          Speak with Erik and the Cold Sun Global team. No sales pressure — just expert insight on your next transformation.
        </p>
        <Link href="/contact" style={{ display:"inline-block", background:S.white, color:S.navy, padding:"16px 32px", borderRadius:8, fontFamily:S.font, fontWeight:700, fontSize:15, textDecoration:"none" }}>
          Schedule a Strategy Session →
        </Link>
      </div>

      {/* Links grid */}
      <div style={{ background:S.navyDeep, padding:"5rem 1.5rem" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48 }}>
          {/* Brand col */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
              <div style={{ width:36, height:36, borderRadius:"50%", background:S.orange, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontFamily:S.display, fontWeight:800, fontSize:14, color:S.white }}>CS</span>
              </div>
              <div>
                <div style={{ fontFamily:S.display, fontWeight:700, fontSize:17, color:S.white }}>Cold Sun Global</div>
                <div style={{ fontFamily:S.font, fontWeight:500, fontSize:10, color:S.orange, letterSpacing:"0.14em", textTransform:"uppercase" }}>International Brand & Presence</div>
              </div>
            </div>
            <p style={{ fontFamily:S.font, fontSize:13, color:"rgba(255,255,255,0.5)", lineHeight:1.7, marginBottom:20 }}>
              The global umbrella brand of the Cold Sun Group — delivering enterprise transformation across North America, UK, EU, and India.
            </p>
            <div style={{ display:"flex", gap:10 }}>
              {[ExternalLink, Share2, Globe].map((Icon, i) => (
                <a key={i} href="#" style={{ width:32, height:32, borderRadius:"50%", background:"rgba(255,255,255,0.1)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <Icon size={14} color="rgba(255,255,255,0.7)" />
                </a>
              ))}
            </div>
            <div style={{ marginTop:20 }}>
              {[["Cold Sun Enterprise","https://coldsunenterprise.com"],["Cold Sun Capital","https://coldsuncapital.com"]].map(([n,u])=>(
                <a key={u} href={u} target="_blank" rel="noopener" style={{ display:"block", fontFamily:S.font, fontSize:12, color:"rgba(255,255,255,0.35)", textDecoration:"none", marginBottom:6 }}>↗ {n}</a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p style={{ fontFamily:S.font, fontSize:11, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.12em", color:S.orange, marginBottom:16 }}>Solutions</p>
            {[["Salesforce","/solutions/salesforce"],["Agentforce & AI","/solutions/agentforce"],["Field Service","/solutions/field-service"],["NetSuite ERP","/solutions/erp"],["ServiceNow","/solutions/servicenow"],["Revenue Management","/solutions/revenue-management"]].map(([l,h])=>(
              <Link key={l} href={h} style={{ display:"block", fontFamily:S.font, fontSize:13, color:"rgba(255,255,255,0.55)", textDecoration:"none", marginBottom:8 }}>{l}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily:S.font, fontSize:11, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.12em", color:S.orange, marginBottom:16 }}>Services</p>
            {[["Consulting","/services/consulting"],["Implementation","/services/implementation"],["Managed Services","/services/managed-services"],["Change Management","/services/change-management"],["Training","/services/training"],["Talent Management","/services/talent-management"]].map(([l,h])=>(
              <Link key={l} href={h} style={{ display:"block", fontFamily:S.font, fontSize:13, color:"rgba(255,255,255,0.55)", textDecoration:"none", marginBottom:8 }}>{l}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily:S.font, fontSize:11, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.12em", color:S.orange, marginBottom:16 }}>Contact</p>
            <div style={{ display:"flex", gap:8, marginBottom:12, alignItems:"flex-start" }}>
              <Mail size={14} style={{ color:"rgba(255,255,255,0.4)", flexShrink:0, marginTop:2 }} />
              <span style={{ fontFamily:S.font, fontSize:13, color:"rgba(255,255,255,0.55)" }}>info@coldsunglobal.com</span>
            </div>
            <div style={{ display:"flex", gap:8, alignItems:"flex-start" }}>
              <Globe size={14} style={{ color:"rgba(255,255,255,0.4)", flexShrink:0, marginTop:2 }} />
              <span style={{ fontFamily:S.font, fontSize:13, color:"rgba(255,255,255,0.55)" }}>NA · UK · EU · India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background:S.navyDeep, borderTop:"1px solid rgba(255,255,255,0.08)", padding:"20px 1.5rem", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
        <p style={{ fontFamily:S.font, fontSize:12, color:"rgba(255,255,255,0.35)" }}>© {new Date().getFullYear()} Cold Sun Global. All rights reserved. Part of the Cold Sun Group.</p>
        <div style={{ display:"flex", gap:24 }}>
          {[["Privacy Policy","#"],["Terms of Use","#"],["Careers","/about#careers"]].map(([l,h])=>(
            <Link key={l} href={h} style={{ fontFamily:S.font, fontSize:12, color:"rgba(255,255,255,0.35)", textDecoration:"none" }}>{l}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
