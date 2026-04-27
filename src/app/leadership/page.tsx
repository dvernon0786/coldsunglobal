import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Leadership" };

export default function Leadership() {
  return (
    <>
      <section className="hero-grid py-28 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{color:"var(--orange)"}}>Our Leadership</p>
          <h1 className="text-4xl md:text-6xl text-white mb-6" style={{fontFamily:"'Playfair Display',serif",fontWeight:800}}>
            Led by <span style={{color:"var(--orange)"}}>Practitioners.</span><br/>Not Just Partners.
          </h1>
          <p className="text-white/70 text-xl max-w-2xl" style={{fontFamily:"'DM Sans',sans-serif"}}>
            The Cold Sun Global leadership team has personally architected and delivered enterprise transformations across five platforms and four global regions.
          </p>
        </div>
      </section>

      {/* Erik feature */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-40 h-40 rounded-2xl flex items-center justify-center text-6xl font-bold text-white mb-8 shadow-2xl" style={{background:"linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)",fontFamily:"'Playfair Display',serif"}}>
                E
              </div>
              <p className="section-label mb-2">Founder & Principal Architect</p>
              <h2 className="text-4xl mb-2" style={{color:"var(--navy)",fontFamily:"'Playfair Display',serif"}}>Erik</h2>
              <p className="text-orange-500 font-semibold mb-6" style={{fontFamily:"'DM Sans',sans-serif"}}>Cold Sun Global / Cold Sun Capital</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Salesforce Certified","NetSuite Specialist","IFS Cloud Architect","15+ Years FSM","150+ Implementations"].map(b => (
                  <span key={b} className="text-xs font-semibold px-3 py-1.5 rounded-full border" style={{borderColor:"var(--navy)",color:"var(--navy)",fontFamily:"'DM Sans',sans-serif"}}>{b}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-5" style={{fontFamily:"'DM Sans',sans-serif"}}>
                Erik is the principal architect and founder of the Cold Sun Group. With over 15 years of hands-on experience in field service management, ERP transformation, and CRM strategy, he has personally led implementations for some of the most demanding clients in energy, telecom, and healthcare.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5" style={{fontFamily:"'DM Sans',sans-serif"}}>
                His approach is direct and outcome-focused: understand the business problem first, choose the right platform second, and deliver with discipline. That philosophy has produced a track record spanning Salesforce, NetSuite, IFS Cloud, ServiceNow, and Sage Intacct — across North America, the UK, the Netherlands, and India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8" style={{fontFamily:"'DM Sans',sans-serif"}}>
                Erik personally leads every initial strategy session at Cold Sun Global — because he believes the best engagements begin with honest, expert advice, not a pitch deck.
              </p>
              <Link href="/contact" className="btn-primary">Schedule a Session with Erik →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy session detail */}
      <section className="py-20 px-6" style={{background:"var(--off-white)"}}>
        <div className="max-w-5xl mx-auto">
          <p className="section-label mb-3">Strategy Sessions</p>
          <h2 className="text-3xl md:text-4xl mb-6 accent-line" style={{color:"var(--navy)"}}>45 Minutes. No Slides. Real Insight.</h2>
          <p className="text-gray-600 text-lg mb-10" style={{fontFamily:"'DM Sans',sans-serif"}}>
            Every new engagement starts with a complimentary 45-minute strategy call, led personally by Erik. There&apos;s no sales pressure — just a structured conversation about your transformation challenges and a concrete assessment of your options.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {t:"Migration Roadmap",d:"A clear view of your path from legacy systems (ClickSoftware, ServiceMax, etc.) to a modern platform — with timelines and risk flags."},
              {t:"ROI Projection",d:"Typical FSM and ERP transformations yield measurable outcomes. We'll model what that looks like for your specific context."},
              {t:"12–16 Week Timeline",d:"A realistic implementation timeline assessment based on your current architecture and organizational readiness."},
              {t:"Platform Fit Analysis",d:"An honest assessment of whether Salesforce, NetSuite, IFS, or ServiceNow is the right choice for your situation — not the one we prefer."},
            ].map(item => (
              <div key={item.t} className="p-6 rounded-xl bg-white border border-gray-100 card-lift">
                <h3 className="font-bold mb-2" style={{color:"var(--navy)",fontFamily:"'Playfair Display',serif"}}>{item.t}</h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{fontFamily:"'DM Sans',sans-serif"}}>{item.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">Book Your Strategy Session →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
