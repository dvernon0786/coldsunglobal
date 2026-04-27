import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const S = { navy:"#04365f", navyDeep:"#02243f", orange:"#f68900", offWhite:"#f8f9fb", white:"#ffffff", grey:"#4a5568", greyLight:"#e8ecf0", font:"'DM Sans',sans-serif", display:"'Playfair Display',serif" };

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

export default function SolutionPage({ label, headline, accent, subheadline, whyTitle, whyBody, whyPoints, cards, stepsTitle, steps, benefitsTitle, benefits, ctaHeadline, ctaBody, ctaLabel, relatedLinks }: SolutionPageProps) {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: S.navy, padding: "7rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position:"absolute", top:0, right:0, width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(246,137,0,0.14) 0%,transparent 70%)", transform:"translate(30%,-30%)", pointerEvents:"none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily:S.font, fontWeight:600, fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", color:S.orange, marginBottom:16 }}>{label}</p>
          <h1 style={{ fontFamily:S.display, fontWeight:800, fontSize:"clamp(2.2rem,5vw,3.8rem)", color:S.white, lineHeight:1.1, marginBottom:24, maxWidth:820 }}>
            {headline}<br /><span style={{ color: S.orange }}>{accent}</span>
          </h1>
          <p style={{ fontFamily:S.font, fontSize:"1.1rem", color:"rgba(255,255,255,0.72)", maxWidth:640, lineHeight:1.75, marginBottom:40 }}>{subheadline}</p>
          <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
            <Link href="/contact" style={{ background:S.orange, color:S.white, padding:"14px 30px", borderRadius:8, fontFamily:S.font, fontWeight:600, fontSize:15, textDecoration:"none", display:"inline-block" }}>{ctaLabel}</Link>
            {relatedLinks?.map(r => (
              <Link key={r.href} href={r.href} style={{ border:"2px solid rgba(255,255,255,0.4)", color:S.white, padding:"12px 24px", borderRadius:8, fontFamily:S.font, fontWeight:600, fontSize:14, textDecoration:"none" }}>{r.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SECTION ── */}
      <section style={{ padding:"5rem 1.5rem", background:S.offWhite }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }}>
          <div>
            <p style={{ fontFamily:S.font, fontWeight:600, fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", color:S.orange, marginBottom:12 }}>Why It Matters</p>
            <h2 style={{ fontFamily:S.display, fontWeight:700, fontSize:"clamp(1.6rem,3vw,2.2rem)", color:S.navy, marginBottom:8 }}>{whyTitle}</h2>
            <div style={{ width:56, height:4, background:S.orange, borderRadius:2, marginBottom:24 }} />
            <p style={{ fontFamily:S.font, color:S.grey, fontSize:"1rem", lineHeight:1.8, marginBottom:28 }}>{whyBody}</p>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {whyPoints.map(pt => (
                <div key={pt} style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                  <CheckCircle size={17} style={{ color:S.orange, flexShrink:0, marginTop:2 }} />
                  <span style={{ fontFamily:S.font, color:"#374151", fontSize:14 }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Stats / badge block */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
            {[
              { n:"15+", l:"Years Salesforce Experience" },
              { n:"150+", l:"Implementations Delivered" },
              { n:"4", l:"Global Delivery Regions" },
              { n:"100%", l:"Outcome-Focused Engagements" },
            ].map(s => (
              <div key={s.l} style={{ padding:28, borderRadius:16, background:S.white, border:`1px solid ${S.greyLight}`, textAlign:"center" }}>
                <div style={{ fontFamily:S.display, fontWeight:800, fontSize:"2.2rem", color:S.navy, lineHeight:1 }}>{s.n}</div>
                <div style={{ fontFamily:S.font, color:S.grey, fontSize:12, marginTop:8 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section style={{ padding:"5rem 1.5rem", background:S.white }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <p style={{ fontFamily:S.font, fontWeight:600, fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", color:S.orange, marginBottom:12 }}>What We Deliver</p>
          <h2 style={{ fontFamily:S.display, fontWeight:700, fontSize:"clamp(1.6rem,3vw,2.2rem)", color:S.navy, marginBottom:8 }}>Core Capabilities</h2>
          <div style={{ width:56, height:4, background:S.orange, borderRadius:2, marginBottom:40 }} />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
            {cards.map(c => (
              <div key={c.title} style={{ padding:32, borderRadius:16, border:`1px solid ${S.greyLight}`, background:S.white }}>
                <h3 style={{ fontFamily:S.display, fontWeight:700, fontSize:"1.05rem", color:S.navy, marginBottom:12 }}>{c.title}</h3>
                <p style={{ fontFamily:S.font, color:S.grey, fontSize:13, lineHeight:1.75 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEPS (optional) ── */}
      {steps && steps.length > 0 && (
        <section style={{ padding:"5rem 1.5rem", background:S.offWhite }}>
          <div style={{ maxWidth:1200, margin:"0 auto" }}>
            <p style={{ fontFamily:S.font, fontWeight:600, fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", color:S.orange, marginBottom:12 }}>Our Approach</p>
            <h2 style={{ fontFamily:S.display, fontWeight:700, fontSize:"clamp(1.6rem,3vw,2.2rem)", color:S.navy, marginBottom:8 }}>{stepsTitle}</h2>
            <div style={{ width:56, height:4, background:S.orange, borderRadius:2, marginBottom:40 }} />
            <div style={{ display:"grid", gridTemplateColumns:`repeat(${Math.min(steps.length,3)},1fr)`, gap:24 }}>
              {steps.map((s, i) => (
                <div key={s.title} style={{ padding:32, borderRadius:16, background:S.white, border:`1px solid ${S.greyLight}`, position:"relative" }}>
                  <div style={{ fontFamily:S.display, fontWeight:800, fontSize:"2.5rem", color:S.orange, opacity:0.3, marginBottom:12, lineHeight:1 }}>0{i+1}</div>
                  <h3 style={{ fontFamily:S.display, fontWeight:700, fontSize:"1rem", color:S.navy, marginBottom:10 }}>{s.title}</h3>
                  <p style={{ fontFamily:S.font, color:S.grey, fontSize:13, lineHeight:1.75 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BENEFITS (optional) ── */}
      {benefits && benefits.length > 0 && (
        <section style={{ padding:"5rem 1.5rem", background:S.navyDeep }}>
          <div style={{ maxWidth:1200, margin:"0 auto" }}>
            <p style={{ fontFamily:S.font, fontWeight:600, fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", color:S.orange, marginBottom:12 }}></p>
            <h2 style={{ fontFamily:S.display, fontWeight:700, fontSize:"clamp(1.6rem,3vw,2.2rem)", color:S.white, marginBottom:8 }}>{benefitsTitle}</h2>
            <div style={{ width:56, height:4, background:S.orange, borderRadius:2, marginBottom:40 }} />
            <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:20 }}>
              {benefits.map(b => (
                <div key={b.title} style={{ padding:28, borderRadius:16, border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.05)", display:"flex", gap:16, alignItems:"flex-start" }}>
                  <CheckCircle size={18} style={{ color:S.orange, flexShrink:0, marginTop:2 }} />
                  <div>
                    <h3 style={{ fontFamily:S.display, fontWeight:700, fontSize:"0.95rem", color:S.white, marginBottom:6 }}>{b.title}</h3>
                    <p style={{ fontFamily:S.font, color:"rgba(255,255,255,0.55)", fontSize:13, lineHeight:1.7 }}>{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section style={{ background:S.navy, padding:"5rem 1.5rem", textAlign:"center" }}>
        <div style={{ maxWidth:740, margin:"0 auto" }}>
          <h2 style={{ fontFamily:S.display, fontWeight:700, fontSize:"clamp(1.8rem,3vw,2.4rem)", color:S.white, marginBottom:16 }}>{ctaHeadline}</h2>
          <p style={{ fontFamily:S.font, color:"rgba(255,255,255,0.7)", fontSize:"1.05rem", marginBottom:32, lineHeight:1.7 }}>{ctaBody}</p>
          <Link href="/contact" style={{ background:S.orange, color:S.white, padding:"14px 36px", borderRadius:8, fontFamily:S.font, fontWeight:600, fontSize:15, textDecoration:"none", display:"inline-block" }}>
            Talk to an Expert →
          </Link>
        </div>
      </section>
    </>
  );
}
