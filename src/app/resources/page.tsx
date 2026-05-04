import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Resources & Insights" };

const blogs = [
  { title: "Why AI Agents Fail Without Governance: Lessons from Early Agentforce Deployments", category: "Agentforce & AI", date: "April 2026", readTime: "6 min read" },
  { title: "ClickSoftware Migration in 2026: What's Changed, What Hasn't, and What to Watch", category: "Field Service", date: "March 2026", readTime: "8 min read" },
  { title: "NetSuite vs IFS Cloud: An Honest Comparison for Asset-Intensive Industries", category: "ERP", date: "March 2026", readTime: "10 min read" },
  { title: "The Real Cost of ERP Implementation Failure — and How to Prevent It", category: "Implementation", date: "February 2026", readTime: "7 min read" },
  { title: "Revenue Recognition Under ASC 606: What Your CRM Needs to Support Compliance", category: "Revenue Management", date: "February 2026", readTime: "9 min read" },
  { title: "Building an AI-Ready Field Service Operation: A Framework for Utilities", category: "Utilities", date: "January 2026", readTime: "11 min read" },
];

const ebooks = [
  { title: "The Field Service Transformation Guide", desc: "A complete framework for modernizing field operations — from legacy system assessment to AI-enabled dispatch.", tag: "Field Service" },
  { title: "ERP Selection Playbook: Salesforce vs NetSuite vs IFS Cloud", desc: "An honest, platform-agnostic evaluation framework for mid-market and enterprise ERP selection.", tag: "ERP" },
  { title: "Agentforce Readiness Assessment Guide", desc: "How to assess your Salesforce environment, data quality, and organizational readiness for AI agent deployment.", tag: "AI & Agentforce" },
  { title: "Change Management for Enterprise Transformations", desc: "The practical guide to driving adoption — stakeholder alignment, communication, training, and measurement.", tag: "Change Management" },
];

const webinars = [
  { title: "AI Agents in Field Service: Real Deployments, Real Results", date: "May 2026", status: "Upcoming" },
  { title: "NetSuite for Professional Services: Implementation Best Practices", date: "April 2026", status: "On Demand" },
  { title: "ClickSoftware to Salesforce: Migration Planning Workshop", date: "March 2026", status: "On Demand" },
  { title: "Revenue Management on Salesforce: CPQ to Billing", date: "February 2026", status: "On Demand" },
];

export default function Resources() {
  return (
    <>
      <section className="hero-grid py-28 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{color:"var(--orange)"}}>Resources & Insights</p>
          <h1 className="text-4xl md:text-6xl text-white mb-6" style={{fontFamily:"Arial, Helvetica, sans-serif",fontWeight:800}}>
            Knowledge Built on<br/><span style={{color:"var(--orange)"}}>15 Years of Delivery.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
            Practical insight from the Cold Sun Global team — on field service, ERP, AI agents, and enterprise transformation. No fluff. No vendor bias. Just what we&apos;ve learned from 150+ implementations.
          </p>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Blog & Insights</p>
          <h2 className="text-3xl md:text-4xl mb-12 accent-line" style={{color:"var(--navy)"}}>Latest Thinking</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map(b => (
              <div key={b.title} className="card-lift p-8 rounded-xl border border-gray-100 bg-white group cursor-pointer">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{background:"var(--orange-pale)",color:"var(--orange)",fontFamily:"Arial, Helvetica, sans-serif"}}>{b.category}</span>
                </div>
                <h3 className="font-bold text-base mb-3 leading-snug group-hover:text-orange-500 transition-colors" style={{color:"var(--navy)",fontFamily:"Arial, Helvetica, sans-serif"}}>{b.title}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-400 mt-4" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
                  <span>{b.date}</span>
                  <span>·</span>
                  <span>{b.readTime}</span>
                </div>
                <span className="flex items-center gap-1 text-sm font-semibold mt-4" style={{color:"var(--orange)",fontFamily:"Arial, Helvetica, sans-serif"}}>
                  Read article <ArrowRight size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ebooks */}
      <section className="py-24 px-6" style={{background:"var(--off-white)"}} id="ebooks">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Ebooks & Guides</p>
          <h2 className="text-3xl md:text-4xl mb-12 accent-line" style={{color:"var(--navy)"}}>In-Depth Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ebooks.map(e => (
              <div key={e.title} className="card-lift p-8 rounded-xl bg-white border border-gray-100 flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl" style={{background:"var(--navy)"}}>📄</div>
                <div>
                  <span className="text-xs font-semibold" style={{color:"var(--orange)",fontFamily:"Arial, Helvetica, sans-serif"}}>{e.tag}</span>
                  <h3 className="font-bold mt-1 mb-2" style={{color:"var(--navy)",fontFamily:"Arial, Helvetica, sans-serif"}}>{e.title}</h3>
                  <p className="text-sm text-gray-500 mb-3" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{e.desc}</p>
                  <Link href="/contact" className="text-sm font-semibold" style={{color:"var(--orange)",fontFamily:"Arial, Helvetica, sans-serif"}}>Download Free →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-24 px-6" id="webinars">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Webinars</p>
          <h2 className="text-3xl md:text-4xl mb-12 accent-line" style={{color:"var(--navy)"}}>Live & On-Demand Sessions</h2>
          <div className="space-y-4">
            {webinars.map(w => (
              <div key={w.title} className="card-lift flex items-center justify-between p-6 rounded-xl border border-gray-100 bg-white">
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${w.status === "Upcoming" ? "text-white" : "text-gray-600 bg-gray-100"}`} style={w.status === "Upcoming" ? {background:"var(--orange)",fontFamily:"Arial, Helvetica, sans-serif"} : {fontFamily:"Arial, Helvetica, sans-serif"}}>{w.status}</span>
                  <div>
                    <h3 className="font-bold" style={{color:"var(--navy)",fontFamily:"Arial, Helvetica, sans-serif"}}>{w.title}</h3>
                    <p className="text-sm text-gray-400 mt-0.5" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{w.date}</p>
                  </div>
                </div>
                <Link href="/contact" className="text-sm font-semibold flex items-center gap-1" style={{color:"var(--orange)",fontFamily:"Arial, Helvetica, sans-serif"}}>
                  {w.status === "Upcoming" ? "Register →" : "Watch →"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
