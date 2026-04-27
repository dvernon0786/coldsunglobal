import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Revenue Management" };

export default function RevenueManagement() {
  return (
    <>
      <section className="hero-grid py-28 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{color:"var(--orange)"}}>Revenue Management</p>
          <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight" style={{fontFamily:"'Playfair Display',serif",fontWeight:800}}>
            Stop Losing Revenue<br/><span style={{color:"var(--orange)"}}>to Process Gaps.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mb-8" style={{fontFamily:"'DM Sans',sans-serif"}}>
            Cold Sun Global streamlines billing, CPQ, subscriptions, and quoting on Salesforce — reducing revenue leakage and accelerating your cash conversion cycle across complex business models.
          </p>
          <Link href="/contact" className="btn-primary">Talk to a Revenue Expert →</Link>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Revenue Solutions</p>
          <h2 className="text-3xl md:text-4xl mb-12 accent-line" style={{color:"var(--navy)"}}>End-to-End Revenue Transformation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {t:"Configure, Price, Quote (CPQ)",d:"Accurate, fast quotes every time — with product rules, pricing tiers, and approval workflows built in."},
              {t:"Subscription Management",d:"Manage complex subscription lifecycles — renewals, upgrades, downgrades, and churn prevention workflows."},
              {t:"Billing & Invoicing",d:"Automated billing for usage, milestone, and recurring revenue models. Reduce manual errors and accelerate collections."},
              {t:"Revenue Recognition",d:"ASC 606 and IFRS 15 compliant revenue recognition — automated, auditable, and connected to your financials."},
              {t:"Contract Management",d:"Centralize contracts with automated renewal triggers, obligation tracking, and performance milestones."},
              {t:"Salesforce Revenue Cloud",d:"Full Salesforce Revenue Cloud implementation — from initial design to go-live, with ongoing optimization support."},
            ].map(item => (
              <div key={item.t} className="card-lift p-8 rounded-xl border border-gray-100 bg-white">
                <h3 className="font-bold text-lg mb-3" style={{color:"var(--navy)",fontFamily:"'Playfair Display',serif"}}>{item.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{fontFamily:"'DM Sans',sans-serif"}}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4" style={{fontFamily:"'Playfair Display',serif"}}>Eliminate Revenue Leakage</h2>
          <p className="text-white/70 text-lg mb-8" style={{fontFamily:"'DM Sans',sans-serif"}}>Talk to our revenue management specialists. We&apos;ll identify where your revenue process has gaps — and design a Salesforce solution that closes them.</p>
          <Link href="/contact" className="btn-primary">Get a Revenue Audit →</Link>
        </div>
      </section>
    </>
  );
}
