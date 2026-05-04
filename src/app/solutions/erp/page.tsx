import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = { title: "ERP Solutions — NetSuite, IFS Cloud, Sage Intacct" };

const platforms = [
  { id: "netsuite", name: "NetSuite ERP", tag: "Cloud ERP for Mid-Market & Enterprise", desc: "NetSuite is the world's leading cloud ERP — and Cold Sun Global's team has delivered complex NetSuite implementations across manufacturing, professional services, distribution, and healthcare. We configure NetSuite to match your operating model, not force your business into a generic template.", features: ["Financial Management & Consolidation","Inventory & Order Management","Project & Resource Management","Revenue Recognition (ASC 606 / IFRS 15)","Multi-Subsidiary & Multi-Currency","CRM & Salesforce Integration"] },
  { id: "ifs", name: "IFS Cloud", tag: "Enterprise Asset & Service Management", desc: "IFS Cloud is purpose-built for asset-intensive and service-driven industries. Cold Sun Global architects IFS Cloud deployments for energy, defence, manufacturing, and field service operations — where asset lifecycle, maintenance, and workforce management are core to the business.", features: ["Enterprise Asset Management (EAM)","Field Service Management","Manufacturing & Production","Project & Contract Management","HR & Workforce Management","IoT & Predictive Maintenance"] },
  { id: "sage", name: "Sage Intacct", tag: "Financial Management for Growing Organizations", desc: "Sage Intacct is the preferred financial management platform for growing mid-market companies. Our team implements and integrates Sage Intacct across nonprofit, healthcare, professional services, and SaaS businesses — with deep expertise in multi-entity consolidation and reporting.", features: ["Multi-Entity Consolidation","Revenue Recognition","Project Accounting","Accounts Payable & Receivable","Financial Reporting & Dashboards","Salesforce Connector"] },
];

export default function ERP() {
  return (
    <>
      <section className="hero-grid py-28 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{color:"var(--orange)"}}>ERP & Platform Solutions</p>
          <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight" style={{fontFamily:"Arial, Helvetica, sans-serif",fontWeight:800}}>
            The Right ERP.<br/><span style={{color:"var(--orange)"}}>Not Just the Loudest One.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mb-8" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
            Cold Sun Global is platform-agnostic. We implement NetSuite, IFS Cloud, and Sage Intacct — choosing the right tool for your specific business, not the one with the biggest marketing budget.
          </p>
          <Link href="/contact" className="btn-primary">Get an ERP Fit Assessment →</Link>
        </div>
      </section>

      <section className="py-20 px-6" style={{background:"var(--off-white)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Why Platform-Agnostic Matters</p>
          <h2 className="text-3xl md:text-4xl mb-6 accent-line" style={{color:"var(--navy)"}}>Five Platforms. One Trusted Team.</h2>
          <p className="text-gray-600 text-lg max-w-3xl mb-10" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
            Most ERP partners are committed to one vendor — because their revenue depends on it. Cold Sun Global is different. We hold certifications across Salesforce, NetSuite, IFS Cloud, ServiceNow, and Sage Intacct. Our recommendation is based on what fits your business — full stop.
          </p>
        </div>
      </section>

      {platforms.map((p, idx) => (
        <section key={p.id} id={p.id} className="py-24 px-6" style={{background: idx % 2 === 0 ? "var(--white)" : "var(--off-white)"}}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-2" style={{color:"var(--orange)"}}>{p.tag}</p>
              <h2 className="text-3xl md:text-4xl mb-6 accent-line" style={{color:"var(--navy)"}}>{p.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{p.desc}</p>
              <Link href="/contact" className="btn-primary">Talk to a {p.name} Expert →</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {p.features.map(f => (
                <div key={f} className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-gray-100">
                  <CheckCircle size={15} style={{color:"var(--orange)"}} className="flex-shrink-0" />
                  <span className="text-sm text-gray-700" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Not Sure Which ERP Is Right for You?</h2>
          <p className="text-white/70 text-lg mb-8" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Erik will give you an honest platform fit analysis — Salesforce vs NetSuite vs IFS vs Sage — based on your business model, not our vendor relationships.</p>
          <Link href="/contact" className="btn-primary">Get a Platform Fit Analysis →</Link>
        </div>
      </section>
    </>
  );
}
