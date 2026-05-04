import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Field Service Management" };

export default function FieldService() {
  return (
    <>
      <section className="hero-grid py-28 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{color:"var(--orange)"}}>Field Service Management</p>
          <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight" style={{fontFamily:"Arial, Helvetica, sans-serif",fontWeight:800}}>
            AI-Ready Field Service<br/><span style={{color:"var(--orange)"}}>Starts Here.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mb-8" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
            15+ years architecting field service for utilities, telecom, and healthcare. From ClickSoftware migrations to fully AI-enabled dispatch — Cold Sun Global connects every part of your field operation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Get a Field Service Readiness Assessment →</Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 pt-8 border-t border-white/10">
            {["15 Yrs FSM Experience","150+ Implementations","SOC 2 Type II Certified","5 Platform Mastery"].map(b => (
              <div key={b} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{background:"var(--orange)"}} />
                <span className="text-white/70 text-sm" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">The Challenge</p>
            <h2 className="text-3xl md:text-4xl mb-6 accent-line" style={{color:"var(--navy)"}}>The Next Era of Field Service: Connected + Intelligent</h2>
            <p className="text-gray-600 leading-relaxed mb-5" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
              The demands on today&apos;s field workforce are higher than ever. Customers expect instant updates and seamless coordination. Operations teams are challenged to reduce costs while doing more with fewer resources.
            </p>
            <p className="text-gray-600 leading-relaxed" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
              Success now depends on intelligent automation, connected data, and AI-driven decision-making. Cold Sun Global helps you achieve all three — through 15+ years of hands-on field service transformation experience across some of the most demanding operating environments in energy, telecom, and healthcare.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {t:"Dispatch & Scheduling",d:"Intelligent, automated scheduling that optimizes technician routes, skills, and availability in real time."},
              {t:"Mobile Technician Tools",d:"Connected mobile experience for technicians — work orders, asset history, and parts availability at their fingertips."},
              {t:"Inventory & Parts",d:"Real-time parts visibility across warehouses and trucks. Fewer return visits, higher first-time fix rates."},
              {t:"Customer Communications",d:"Automated, proactive customer updates at every step — from appointment confirmation to job completion."},
              {t:"Asset & Maintenance",d:"Predictive maintenance workflows connected to asset history — move from reactive to proactive service models."},
              {t:"ClickSoftware Migration",d:"The most complex migration in FSM. We&apos;ve done it many times. We know where the risk is."},
            ].map(item => (
              <div key={item.t} className="p-5 rounded-xl border border-gray-100 bg-white card-lift">
                <h3 className="font-bold text-sm mb-1.5" style={{color:"var(--navy)",fontFamily:"Arial, Helvetica, sans-serif"}}>{item.t}</h3>
                <p className="text-xs text-gray-500 leading-relaxed" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{background:"var(--off-white)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Industries We Serve</p>
          <h2 className="text-3xl md:text-4xl mb-10" style={{color:"var(--navy)"}}>Built for the Most Demanding Field Environments</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {i:"⚡",n:"Energy & Utilities",d:"Meter service, grid maintenance, and outage management — connected and AI-ready on Salesforce Field Service."},
              {i:"📡",n:"Telecommunications",d:"Technician dispatch for installations, repairs, and network maintenance across large geographic footprints."},
              {i:"🏥",n:"Healthcare & Life Sciences",d:"Equipment servicing, biomedical maintenance, and home health coordination — compliant and connected."},
              {i:"🏭",n:"Manufacturing",d:"Field service for industrial equipment — warranties, SLAs, and parts management at scale."},
              {i:"🏠",n:"Home & Business Services",d:"Scheduling, dispatch, and customer experience for high-volume residential and commercial service operations."},
              {i:"🔋",n:"Oil & Gas",d:"Asset-intensive field operations with complex compliance requirements — from inspection to maintenance to emergency response."},
            ].map(ind => (
              <div key={ind.n} className="p-6 rounded-xl bg-white border border-gray-100 card-lift">
                <div className="text-3xl mb-3">{ind.i}</div>
                <h3 className="font-bold mb-2" style={{color:"var(--navy)",fontFamily:"Arial, Helvetica, sans-serif"}}>{ind.n}</h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{ind.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Get Your Field Service Readiness Assessment</h2>
          <p className="text-white/70 text-lg mb-8" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>A complimentary 45-minute session with Erik. Walk away with a migration roadmap, ROI projection, and 12–16 week implementation timeline — no obligation.</p>
          <Link href="/contact" className="btn-primary">Book Your Assessment →</Link>
        </div>
      </section>
    </>
  );
}
