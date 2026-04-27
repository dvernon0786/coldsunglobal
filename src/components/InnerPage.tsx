import Link from "next/link";
import { CheckCircle } from "lucide-react";

const S = { navy:"#04365f", navyDeep:"#02243f", orange:"#f68900", offWhite:"#f8f9fb", white:"#ffffff", grey:"#4a5568", greyLight:"#e8ecf0", font:"'DM Sans',sans-serif", display:"'Playfair Display',serif" };

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

export default function InnerPage({ label, headline, headlineAccent, subheadline, intro, sections, capabilities, ctaHeadline, ctaBody, ctaLabel }: InnerPageProps) {
  return (
    <>
      {/* Hero */}
      <section style={{ background:S.navy, padding:"7rem 1.5rem 5rem", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, right:0, width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(246,137,0,0.12) 0%, transparent 70%)", transform:"translate(30%,-30%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <p style={{ fontFamily:S.font, fontWeight:600, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", color:S.orange, marginBottom:16 }}>{label}</p>
          <h1 style={{ fontFamily:S.display, fontWeight:800, fontSize:"clamp(2.2rem,5vw,4rem)", color:S.white, lineHeight:1.1, marginBottom:24 }}>
            {headline}{headlineAccent && <><br/><span style={{ color:S.orange }}>{headlineAccent}</span></>}
          </h1>
          <p style={{ fontFamily:S.font, fontSize:"1.125rem", color:"rgba(255,255,255,0.7)", maxWidth:600, marginBottom:40, lineHeight:1.7 }}>{subheadline}</p>
          <Link href="/contact" style={{ background:S.orange, color:S.white, padding:"14px 28px", borderRadius:8, fontFamily:S.font, fontWeight:600, fontSize:15, textDecoration:"none", display:"inline-block" }}>Talk to an Expert →</Link>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding:"6rem 1.5rem", background:S.white }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"start" }}>
          <div>
            <p style={{ fontFamily:S.font, fontWeight:600, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", color:S.orange, marginBottom:12 }}>Overview</p>
            <h2 style={{ fontFamily:S.display, fontWeight:700, fontSize:"clamp(1.6rem,3vw,2.2rem)", color:S.navy, marginBottom:8 }}>What We Do</h2>
            <div style={{ width:56, height:4, background:S.orange, borderRadius:2, marginBottom:24 }} />
            <p style={{ fontFamily:S.font, color:S.grey, fontSize:"1.05rem", lineHeight:1.7 }}>{intro}</p>
            {capabilities && (
              <div style={{ marginTop:32 }}>
                {capabilities.map(c => (
                  <div key={c} style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
                    <CheckCircle size={16} style={{ color:S.orange, flexShrink:0 }} />
                    <span style={{ fontFamily:S.font, color:"#374151", fontSize:14 }}>{c}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {sections.map(s => (
              <div key={s.title} style={{ padding:24, borderRadius:16, border:`1px solid ${S.greyLight}`, background:S.white }}>
                <h3 style={{ fontFamily:S.display, fontWeight:700, fontSize:"1rem", color:S.navy, marginBottom:8 }}>{s.title}</h3>
                <p style={{ fontFamily:S.font, fontSize:13, color:S.grey, lineHeight:1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:S.navy, padding:"5rem 1.5rem", textAlign:"center" }}>
        <div style={{ maxWidth:760, margin:"0 auto" }}>
          <h2 style={{ fontFamily:S.display, fontWeight:700, fontSize:"clamp(1.8rem,3vw,2.5rem)", color:S.white, marginBottom:16 }}>{ctaHeadline}</h2>
          <p style={{ fontFamily:S.font, color:"rgba(255,255,255,0.7)", fontSize:"1.05rem", marginBottom:32 }}>{ctaBody}</p>
          <Link href="/contact" style={{ background:S.orange, color:S.white, padding:"14px 32px", borderRadius:8, fontFamily:S.font, fontWeight:600, fontSize:15, textDecoration:"none", display:"inline-block" }}>{ctaLabel}</Link>
        </div>
      </section>
    </>
  );
}
