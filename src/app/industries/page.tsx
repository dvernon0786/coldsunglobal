import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Industries We Serve" };

const industries = [
  {
    icon: "⚡",
    name: "Energy & Oil and Gas",
    href: "/industries/energy",
    desc: "Field service, asset lifecycle management, and revenue operations for energy producers, midstream operators, and upstream exploration companies.",
    platforms: ["Salesforce Field Service", "IFS Cloud", "NetSuite"],
    clients: ["Enbridge", "Spire Energy", "LNG Canada", "SaskEnergy"],
  },
  {
    icon: "🔋",
    name: "Utilities",
    href: "/industries/utilities",
    desc: "Connected field operations, asset management, and customer information systems for electric, gas, and water utilities across North America.",
    platforms: ["Salesforce Field Service", "IFS Cloud", "ServiceNow"],
    clients: ["Nova Scotia Power", "Newfoundland Power", "SMUD", "Black Hills"],
  },
  {
    icon: "🏥",
    name: "Healthcare & Life Sciences",
    href: "/industries/healthcare",
    desc: "Patient management, medical device field service, revenue cycle management, and compliance-driven ERP for health systems and life sciences organizations.",
    platforms: ["Salesforce Health Cloud", "NetSuite", "Sage Intacct"],
    clients: ["Philips Healthcare", "Baylor Genetics", "Bowline Health", "Signify Health"],
  },
  {
    icon: "📡",
    name: "Telecommunications",
    href: "/industries/telecom",
    desc: "Technician dispatch, subscriber management, network asset management, and revenue operations for telecom operators across North America and Europe.",
    platforms: ["Salesforce Field Service", "Salesforce CRM", "NetSuite"],
    clients: ["Rogers", "Bell", "Cogeco", "NorthwesTel"],
  },
  {
    icon: "🏭",
    name: "Manufacturing",
    href: "/industries/manufacturing",
    desc: "Equipment field service, ERP for production and inventory, dealer and customer management for discrete and process manufacturers.",
    platforms: ["NetSuite", "IFS Cloud", "Salesforce"],
    clients: ["Sani Matic", "Independent Can Company", "Konica Minolta", "Loftware"],
  },
  {
    icon: "💼",
    name: "Professional Services",
    href: "/industries/professional-services",
    desc: "Project-based ERP, client lifecycle management, and revenue recognition for consulting, legal, engineering, and IT services firms.",
    platforms: ["NetSuite", "Salesforce PSA", "Sage Intacct"],
    clients: ["PYA", "Mercer Advisors", "Healthcare IT Leaders", "ClearView"],
  },
  {
    icon: "💻",
    name: "High Technology & IT",
    href: "/industries/high-tech",
    desc: "Subscription revenue management, partner relationship management, and scalable ERP for high-growth software and technology companies.",
    platforms: ["Salesforce Revenue Cloud", "NetSuite", "Sage Intacct"],
    clients: ["Tenable", "Mitratech", "Mobileum", "Symplr"],
  },
  {
    icon: "🎓",
    name: "Education",
    href: "/industries/education",
    desc: "Student lifecycle management, recruitment, success programs, and institutional financial management for higher education institutions.",
    platforms: ["Salesforce Education Cloud", "Sage Intacct", "NetSuite"],
    clients: ["Toronto Metropolitan University", "Humber College", "Brescia", "George Brown"],
  },
  {
    icon: "❤️",
    name: "Nonprofit",
    href: "/industries/nonprofit",
    desc: "Donor management, program outcome tracking, grant management, and fund accounting for mission-driven organizations.",
    platforms: ["Salesforce NPSP", "Sage Intacct", "NetSuite"],
    clients: ["United for Literacy", "Jamboree", "NAM"],
  },
  {
    icon: "🏠",
    name: "Home & Business Services",
    href: "/industries/home-services",
    desc: "High-volume scheduling, intelligent dispatch, customer experience, and technician productivity for residential and commercial service companies.",
    platforms: ["Salesforce Field Service", "Salesforce CRM", "ServiceNow"],
    clients: ["Inter-Con Security", "Brand iD", "Fortrex"],
  },
];

export default function IndustriesIndex() {
  return (
    <>
      {/* Hero */}
      <section className="hero-grid py-28 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{ color: "var(--orange)" }}>Industries</p>
          <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 800 }}>
            Deep Vertical Knowledge.<br /><span style={{ color: "var(--orange)" }}>Across 10 Industries.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mb-10" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            Cold Sun Global doesn&apos;t apply generic consulting methodologies to every sector. We bring industry-specific expertise — understanding the regulatory environment, operational challenges, and technology landscape of the sectors we serve.
          </p>
          <Link href="/contact" className="btn-primary">Find Your Industry Expert →</Link>
        </div>
      </section>

      {/* Industry stats bar */}
      <section className="py-14 px-6 border-b border-gray-100" style={{ background: "var(--off-white)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "10", l: "Industries Served" },
            { n: "150+", l: "Implementations Delivered" },
            { n: "15+", l: "Years Industry Experience" },
            { n: "4", l: "Global Delivery Regions" },
          ].map(s => (
            <div key={s.l} className="text-center">
              <div className="stat-number">{s.n}</div>
              <div className="text-gray-500 text-sm mt-2" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Our Sectors</p>
          <h2 className="text-3xl md:text-4xl mb-12 accent-line" style={{ color: "var(--navy)" }}>
            Choose Your Industry
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map(ind => (
              <Link key={ind.href} href={ind.href}
                className="card-lift block p-8 rounded-xl border border-gray-100 bg-white hover:border-orange-200 group">
                <div className="flex items-start gap-5">
                  <div className="text-4xl flex-shrink-0">{ind.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors" style={{ color: "var(--navy)", fontFamily: "Arial, Helvetica, sans-serif" }}>
                      {ind.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                      {ind.desc}
                    </p>
                    {/* Platform tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {ind.platforms.map(p => (
                        <span key={p} className="text-xs px-2.5 py-1 rounded-full border" style={{ borderColor: "var(--grey-light)", color: "var(--grey-text)", fontFamily: "Arial, Helvetica, sans-serif" }}>
                          {p}
                        </span>
                      ))}
                    </div>
                    {/* Sample clients */}
                    <p className="text-xs text-gray-400 mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                      Clients include: {ind.clients.join(" · ")}
                    </p>
                    <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--orange)", fontFamily: "Arial, Helvetica, sans-serif" }}>
                      Explore {ind.name} <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-industry value prop */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🔬", title: "Domain-Specific Expertise", body: "Our consultants don't just know the platform — they know your industry. Regulatory requirements, operational patterns, and common failure modes are built into our delivery approach." },
            { icon: "📋", title: "Industry Accelerators", body: "Pre-built configuration templates, data models, and process designs for your sector — reducing implementation time and increasing confidence in your solution design." },
            { icon: "🤝", title: "Peer-Level Conversations", body: "We speak your language. Field ops, not just CRM. Revenue cycle, not just billing module. Compliance documentation, not just process flow. That specificity makes our engagements better." },
          ].map(item => (
            <div key={item.title} className="p-8 rounded-xl bg-white/5 border border-white/10">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-3 text-white" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
