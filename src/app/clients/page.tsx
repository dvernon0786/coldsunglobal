import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Our Clients" };

const clients = [
  "Philips Healthcare","Enbridge","Spire Energy","Rogers","Bell","Atos","Henry Schein",
  "Cognizant","Konica Minolta","Capita","Pacific Power Solutions","Dynamic SLR",
  "Bowline Health","Hancock Claims Consultants","WireOne","Chiltern District Council",
  "Newfoundland Power","Phoenix Consulting","Rafterone","Roycon Technologies",
  "Uptima Inc","App Solve","AEC",
];

const stories = [
  {
    client: "Major Telecom Operator",
    industry: "Telecommunications",
    challenge: "Dispatching 2,000+ field technicians across a national network using a legacy scheduling system that couldn't scale or integrate with modern customer service tools.",
    outcome: "Migrated to Salesforce Field Service with AI-enabled dispatch. Technician productivity increased by 22%, first-time fix rate improved by 18%, and customer satisfaction scores rose by 15 points within 6 months of go-live.",
    platform: "Salesforce Field Service",
  },
  {
    client: "Regional Energy Utility",
    industry: "Energy & Utilities",
    challenge: "Disconnected asset management, field service, and customer information systems creating data gaps, billing errors, and slow outage response times.",
    outcome: "Unified field operations on Salesforce Field Service integrated with IFS Cloud for asset management. Outage response time reduced by 30%, billing error rate dropped by 40%, and field crew utilization improved by 25%.",
    platform: "Salesforce + IFS Cloud",
  },
  {
    client: "Healthcare Device Manufacturer",
    industry: "Healthcare & Life Sciences",
    challenge: "Manual biomedical equipment service scheduling across 60+ hospital sites, with no real-time visibility into asset status, compliance documentation, or technician availability.",
    outcome: "Salesforce Field Service implementation with custom compliance documentation workflows. Service SLA compliance reached 97%, documentation time reduced by 50%, and asset utilization visibility improved enterprise-wide.",
    platform: "Salesforce Field Service",
  },
  {
    client: "Mid-Market Professional Services Firm",
    industry: "Professional Services",
    challenge: "Growing firm with disconnected project management, time tracking, billing, and CRM systems — causing revenue leakage and poor project margin visibility.",
    outcome: "NetSuite implementation with Salesforce integration. Revenue recognition automated under ASC 606, project margin visibility improved from monthly to real-time, and billing cycle reduced from 30 to 7 days.",
    platform: "NetSuite + Salesforce",
  },
];

export default function Clients() {
  return (
    <>
      <section className="hero-grid py-28 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{color:"var(--orange)"}}>Our Clients</p>
          <h1 className="text-4xl md:text-6xl text-white mb-6" style={{fontFamily:"Arial, Helvetica, sans-serif",fontWeight:800}}>
            Organizations That Take<br/><span style={{color:"var(--orange)"}}>Service Seriously.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
            Cold Sun Global has had the privilege of working with some of the most demanding organizations in energy, telecom, healthcare, and professional services — across four global regions.
          </p>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Client Roster</p>
          <h2 className="text-3xl md:text-4xl mb-12 accent-line" style={{color:"var(--navy)"}}>Companies That Went Before You</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map(c => (
              <div key={c} className="card-lift p-5 rounded-xl border border-gray-100 bg-white text-center">
                <span className="text-sm font-semibold text-gray-700" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="py-24 px-6" style={{background:"var(--off-white)"}} id="stories">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Success Stories</p>
          <h2 className="text-3xl md:text-4xl mb-12 accent-line" style={{color:"var(--navy)"}}>Real Outcomes. Real Organizations.</h2>
          <div className="space-y-8">
            {stories.map(s => (
              <div key={s.client} className="card-lift p-8 rounded-xl bg-white border border-gray-100">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{background:"var(--orange-pale)",color:"var(--orange)",fontFamily:"Arial, Helvetica, sans-serif"}}>{s.industry}</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{background:"var(--off-white)",color:"var(--navy)",fontFamily:"Arial, Helvetica, sans-serif"}}>{s.platform}</span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{color:"var(--navy)",fontFamily:"Arial, Helvetica, sans-serif"}}>{s.client}</h3>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-gray-400" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Challenge</p>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{s.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{color:"var(--orange)",fontFamily:"Arial, Helvetica, sans-serif"}}>Outcome</p>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{s.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Ready to Join This List?</h2>
          <p className="text-white/70 text-lg mb-8" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Talk to Erik. We&apos;ll design a transformation approach as specific and demanding as your business.</p>
          <Link href="/contact" className="btn-primary">Start the Conversation →</Link>
        </div>
      </section>
    </>
  );
}
