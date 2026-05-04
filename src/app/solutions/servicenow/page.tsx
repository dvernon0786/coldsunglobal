import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "ServiceNow Solutions" };

export default function ServiceNow() {
  return (
    <>
      <section className="hero-grid py-28 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{color:"var(--orange)"}}>ServiceNow</p>
          <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight" style={{fontFamily:"Arial, Helvetica, sans-serif",fontWeight:800}}>
            Modernize How<br/><span style={{color:"var(--orange)"}}>Your Enterprise Works.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mb-8" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
            Cold Sun Global deploys ServiceNow for IT service management, HR service delivery, and enterprise workflows — transforming how your teams operate at scale.
          </p>
          <Link href="/contact" className="btn-primary">Talk to a ServiceNow Expert →</Link>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">ServiceNow Practice</p>
            <h2 className="text-3xl md:text-4xl mb-6 accent-line" style={{color:"var(--navy)"}}>Enterprise Workflows That Actually Work</h2>
            <p className="text-gray-600 leading-relaxed mb-5" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
              ServiceNow is the enterprise platform for digital workflow transformation — connecting IT, HR, customer service, and security operations on a single platform. Cold Sun Global implements ServiceNow with the same outcome-first philosophy we apply to every engagement.
            </p>
            <p className="text-gray-600 leading-relaxed" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
              Our certified ServiceNow consultants understand not just the platform, but the operational challenges of large enterprises — from multi-department service portals to complex ITSM processes and integrated field operations.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {t:"IT Service Management (ITSM)",d:"Incident, problem, change, and request management — all aligned to ITIL best practices and your specific service model."},
              {t:"HR Service Delivery",d:"Streamline HR operations with self-service portals, automated workflows, and case management for employee requests."},
              {t:"Customer Service Management",d:"Omnichannel customer service workflows connected to field service and back-office operations."},
              {t:"IT Asset Management (ITAM)",d:"Full visibility into hardware and software assets — lifecycle tracking, compliance, and cost optimization."},
              {t:"Security Operations (SecOps)",d:"Automated security incident response workflows that reduce mean time to resolution and improve compliance posture."},
              {t:"Integration Hub",d:"Connect ServiceNow to Salesforce, NetSuite, and your existing enterprise systems for unified data and seamless workflows."},
            ].map(item => (
              <div key={item.t} className="p-5 rounded-xl border border-gray-100 bg-white card-lift">
                <h3 className="font-bold mb-1.5" style={{color:"var(--navy)",fontFamily:"Arial, Helvetica, sans-serif"}}>{item.t}</h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Ready to Transform Enterprise Operations?</h2>
          <p className="text-white/70 text-lg mb-8" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Schedule a ServiceNow assessment with the Cold Sun Global team. We&apos;ll map your current workflows and identify the highest-value automation opportunities.</p>
          <Link href="/contact" className="btn-primary">Book a ServiceNow Assessment →</Link>
        </div>
      </section>
    </>
  );
}
