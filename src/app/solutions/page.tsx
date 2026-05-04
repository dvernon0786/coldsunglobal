import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Solutions — Salesforce, NetSuite, IFS Cloud, ServiceNow" };

const solutionGroups = [
  {
    group: "Salesforce Solutions",
    color: "var(--orange)",
    intro: "Cold Sun Global is a certified Salesforce consulting partner. We implement the full Salesforce platform — from CRM and Field Service to AI agents and Revenue Management.",
    items: [
      { label: "Salesforce Overview", desc: "The world's #1 CRM platform — implemented with deep industry expertise across the full product suite.", href: "/solutions/salesforce" },
      { label: "Agentforce & AI Agents", desc: "Autonomous AI agents that handle service, dispatch, and revenue workflows — governed and enterprise-grade.", href: "/solutions/agentforce" },
      { label: "Field Service Management", desc: "AI-ready field operations connecting dispatch, technicians, inventory, and customers on Salesforce.", href: "/solutions/field-service" },
      { label: "Revenue Management", desc: "CPQ, billing, subscriptions, and revenue recognition — end-to-end on Salesforce Revenue Cloud.", href: "/solutions/revenue-management" },
    ],
  },
  {
    group: "ERP & Platform Solutions",
    color: "#3b82f6",
    intro: "Cold Sun Global is platform-agnostic. We implement the ERP that fits your business — NetSuite, IFS Cloud, or Sage Intacct — without vendor bias.",
    items: [
      { label: "NetSuite ERP", desc: "Cloud ERP for mid-market and enterprise — financials, inventory, project management, and multi-subsidiary consolidation.", href: "/solutions/erp" },
      { label: "IFS Cloud", desc: "Purpose-built for asset-intensive industries — enterprise asset management, field service, and manufacturing.", href: "/solutions/erp#ifs" },
      { label: "Sage Intacct", desc: "Best-in-class financial management for growing organizations — multi-entity, project accounting, and reporting.", href: "/solutions/erp#sage" },
    ],
  },
  {
    group: "ServiceNow",
    color: "#10b981",
    intro: "Enterprise workflow transformation across IT, HR, customer service, and security — deployed by Cold Sun Global's certified ServiceNow consultants.",
    items: [
      { label: "IT Service Management", desc: "ITSM aligned to ITIL best practices — incident, problem, change, and request management at enterprise scale.", href: "/solutions/servicenow" },
      { label: "HR Service Delivery", desc: "Streamlined HR operations with self-service portals, case management, and automated workflows.", href: "/solutions/servicenow" },
      { label: "Integration Hub", desc: "Connect ServiceNow to Salesforce, NetSuite, and your existing enterprise systems for unified workflow automation.", href: "/solutions/servicenow" },
    ],
  },
];

export default function SolutionsIndex() {
  return (
    <>
      {/* Hero */}
      <section className="hero-grid py-28 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{ color: "var(--orange)" }}>Solutions</p>
          <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 800 }}>
            Platform-Agnostic.<br /><span style={{ color: "var(--orange)" }}>Outcome-Obsessed.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mb-10" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            Cold Sun Global holds certified expertise across five enterprise platforms — Salesforce, NetSuite, IFS Cloud, ServiceNow, and Sage Intacct. We recommend the right tool for your business, not the one that benefits us most.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Get a Platform Fit Analysis →</Link>
            <Link href="/about" className="btn-ghost">How We Work</Link>
          </div>
          {/* Platform badges */}
          <div className="mt-14 flex flex-wrap gap-3 pt-10 border-t border-white/10">
            {["Salesforce","NetSuite","IFS Cloud","ServiceNow","Sage Intacct"].map(p => (
              <span key={p} className="px-4 py-2 rounded-full text-sm font-semibold border border-white/20 text-white/80" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why platform-agnostic matters */}
      <section className="py-20 px-6" style={{ background: "var(--off-white)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🎯", title: "Right Tool for the Job", body: "We evaluate your operating model, data landscape, and growth trajectory — then recommend the platform with the best fit. Not the one with the biggest margin for us." },
            { icon: "🔗", title: "Cross-Platform Integration", body: "Most enterprises need more than one platform. We design and deliver integrations between Salesforce, NetSuite, IFS, and ServiceNow — connecting your ecosystem, not just individual tools." },
            { icon: "📈", title: "Outcomes, Not Features", body: "Every solution we design is anchored to a business outcome — reduced cost, faster service, better data, or higher revenue. Platform capability is the means, not the end." },
          ].map(item => (
            <div key={item.title} className="p-8 rounded-xl bg-white border border-gray-100 card-lift">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-3" style={{ color: "var(--navy)", fontFamily: "Arial, Helvetica, sans-serif" }}>{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solution groups */}
      {solutionGroups.map((group, idx) => (
        <section key={group.group} className="py-24 px-6" style={{ background: idx % 2 === 0 ? "var(--white)" : "var(--off-white)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{ background: group.color, color: "white", fontFamily: "Arial, Helvetica, sans-serif" }}>{group.group}</div>
              <p className="text-gray-600 max-w-2xl text-lg" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{group.intro}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map(item => (
                <Link key={item.href + item.label} href={item.href}
                  className="card-lift block p-8 rounded-xl border border-gray-100 bg-white hover:border-orange-200 group">
                  <h3 className="font-bold text-lg mb-3 group-hover:text-orange-500 transition-colors" style={{ color: "var(--navy)", fontFamily: "Arial, Helvetica, sans-serif" }}>
                    {item.label}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{item.desc}</p>
                  <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--orange)", fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Explore <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            Not Sure Which Platform Is Right?
          </h2>
          <p className="text-white/70 text-lg mb-8" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            Erik will give you a platform-agnostic fit analysis — Salesforce vs NetSuite vs IFS vs ServiceNow — based on your business model and goals.
          </p>
          <Link href="/contact" className="btn-primary">Get a Free Platform Assessment →</Link>
        </div>
      </section>
    </>
  );
}
