import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About Us" };

const S = { navy:"#04365f", navyDeep:"#02243f", orange:"#f68900", offWhite:"#f8f9fb", white:"#ffffff", grey:"#4a5568", greyLight:"#e8ecf0", font:"'DM Sans',sans-serif", display:"'Playfair Display',serif" };

export default function About() {
  return (
    <>
      <section style={{ background:S.navy, padding:"7rem 1.5rem 5rem" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <p style={{ fontFamily:S.font, fontWeight:600, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", color:S.orange, marginBottom:16 }}>Who We Are</p>
          <h1 style={{ fontFamily:S.display, fontWeight:800, fontSize:"clamp(2.5rem,6vw,4.5rem)", color:S.white, lineHeight:1.1, marginBottom:24 }}>Built for Outcomes.<br/><span style={{ color:S.orange }}>Trusted for Delivery.</span></h1>
          <p style={{ fontFamily:S.font, fontSize:"1.125rem", color:"rgba(255,255,255,0.7)", maxWidth:620, lineHeight:1.7 }}>For over 15 years, the Cold Sun Group has helped organizations modernize enterprise operations. Cold Sun Global brings that expertise to international markets.</p>
        </div>
      </section>

      <section style={{ padding:"6rem 1.5rem", background:S.white }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
          <div>
            <p style={{ fontFamily:S.font, fontWeight:600, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", color:S.orange, marginBottom:12 }}>Our Story</p>
            <h2 style={{ fontFamily:S.display, fontWeight:700, fontSize:"clamp(1.8rem,3vw,2.5rem)", color:S.navy, marginBottom:8 }}>We Didn&apos;t Grow by Chasing Trends</h2>
            <div style={{ width:56, height:4, background:S.orange, borderRadius:2, marginBottom:24 }} />
            <p style={{ fontFamily:S.font, color:S.grey, lineHeight:1.7, marginBottom:20 }}>Cold Sun Global is the international face of the Cold Sun Group — a technology consulting organization that has spent more than 15 years architecting and delivering complex enterprise transformations across field service, ERP, CRM, and AI.</p>
            <p style={{ fontFamily:S.font, color:S.grey, lineHeight:1.7, marginBottom:20 }}>The companies we work with chose us because we combine deep platform expertise with operational discipline. We don&apos;t just configure software — we redesign how organizations work.</p>
            <p style={{ fontFamily:S.font, color:S.grey, lineHeight:1.7 }}>Today, Cold Sun Global represents everything the group stands for — global reach, platform breadth, and outcomes that last.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
            {[{n:"15+",l:"Years Experience"},{n:"150+",l:"Implementations"},{n:"5",l:"Platforms Mastered"},{n:"4",l:"Global Regions"},{n:"50+",l:"Certified Consultants"},{n:"10",l:"Industries Served"}].map(s=>(
              <div key={s.l} style={{ padding:32, borderRadius:16, background:S.offWhite, textAlign:"center" }}>
                <div style={{ fontFamily:S.display, fontSize:"2.5rem", fontWeight:800, color:S.navy, lineHeight:1 }}>{s.n}</div>
                <div style={{ fontFamily:S.font, color:S.grey, fontSize:13, marginTop:8 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:S.navyDeep, padding:"6rem 1.5rem" }} id="group">
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <p style={{ fontFamily:S.font, fontWeight:600, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", color:S.orange, marginBottom:12 }}>The Cold Sun Group</p>
          <h2 style={{ fontFamily:S.display, fontWeight:700, fontSize:"clamp(1.8rem,3vw,2.5rem)", color:S.white, marginBottom:48 }}>A 3-Layer Structure Built for Scale</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
            {[{e:"Cold Sun Global",r:"Brand & Global Presence",d:"The name the market sees. International positioning, partnerships, reputation, and marketing.",c:S.orange},{e:"Cold Sun Capital",r:"Ownership & Investment",d:"Controls equity, investments, and financial strategy. The holding arm that funds group growth.",c:"#60a5fa"},{e:"Cold Sun Enterprise",r:"Execution Engine",d:"Where work gets done. Implementation, consulting, and delivery across all platforms.",c:"#34d399"}].map(e=>(
              <div key={e.e} style={{ padding:32, borderRadius:16, border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.05)" }}>
                <div style={{ fontFamily:S.font, fontSize:11, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em", color:e.c, marginBottom:8 }}>{e.r}</div>
                <h3 style={{ fontFamily:S.display, fontWeight:700, fontSize:"1.25rem", color:S.white, marginBottom:12 }}>{e.e}</h3>
                <p style={{ fontFamily:S.font, fontSize:13, color:"rgba(255,255,255,0.5)", lineHeight:1.7 }}>{e.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop:32, display:"flex", gap:16 }}>
            <a href="https://coldsuncapital.com" target="_blank" rel="noopener" style={{ border:"2px solid rgba(255,255,255,0.4)", color:S.white, padding:"10px 22px", borderRadius:8, fontFamily:S.font, fontWeight:600, fontSize:14, textDecoration:"none" }}>Visit Cold Sun Capital ↗</a>
            <a href="https://coldsunenterprise.com" target="_blank" rel="noopener" style={{ border:"2px solid rgba(255,255,255,0.4)", color:S.white, padding:"10px 22px", borderRadius:8, fontFamily:S.font, fontWeight:600, fontSize:14, textDecoration:"none" }}>Visit Cold Sun Enterprise ↗</a>
          </div>
        </div>
      </section>

      <section style={{ padding:"6rem 1.5rem", background:S.white }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <p style={{ fontFamily:S.font, fontWeight:600, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", color:S.orange, marginBottom:12 }}>Global Reach</p>
          <h2 style={{ fontFamily:S.display, fontWeight:700, fontSize:"clamp(1.8rem,3vw,2.5rem)", color:S.navy, marginBottom:8 }}>Where We Operate</h2>
          <div style={{ width:56, height:4, background:S.orange, borderRadius:2, marginBottom:48 }} />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:24 }}>
            {[{r:"North America",d:"Primary client market. Sales, consulting, and senior delivery leadership across US and Canada.",flag:"🇺🇸"},{r:"United Kingdom",d:"Growing enterprise presence. Serving clients in financial services, utilities, and telecom.",flag:"🇬🇧"},{r:"Netherlands (EU)",d:"European headquarters. Serving clients across the EU with multilingual delivery.",flag:"🇳🇱"},{r:"India (Delivery Hub)",d:"Cost-efficient, high-quality delivery capacity. Certified engineers supporting global projects.",flag:"🇮🇳"}].map(r=>(
              <div key={r.r} style={{ padding:24, borderRadius:16, border:`1px solid ${S.greyLight}`, background:S.white }}>
                <div style={{ fontSize:32, marginBottom:12 }}>{r.flag}</div>
                <h3 style={{ fontFamily:S.display, fontWeight:700, color:S.navy, marginBottom:8 }}>{r.r}</h3>
                <p style={{ fontFamily:S.font, fontSize:13, color:S.grey, lineHeight:1.6 }}>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" style={{ background:S.orange, padding:"5rem 1.5rem", textAlign:"center" }}>
        <div style={{ maxWidth:760, margin:"0 auto" }}>
          <h2 style={{ fontFamily:S.display, fontWeight:700, fontSize:"clamp(1.8rem,3vw,2.5rem)", color:S.white, marginBottom:16 }}>Join the Cold Sun Global Team</h2>
          <p style={{ fontFamily:S.font, color:"rgba(255,255,255,0.85)", fontSize:"1.05rem", marginBottom:32 }}>We are always looking for exceptional consultants, architects, and delivery leads certified in Salesforce, NetSuite, IFS, or ServiceNow.</p>
          <Link href="/contact" style={{ display:"inline-block", background:S.white, color:S.navy, padding:"16px 32px", borderRadius:8, fontFamily:S.font, fontWeight:700, fontSize:15, textDecoration:"none" }}>Get in Touch →</Link>
        </div>
      </section>
    </>
  );
}
