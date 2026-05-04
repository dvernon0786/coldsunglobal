import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Agentforce & AI Agents" };

export default function Agentforce() {
  return (
    <>
      <section className="hero-grid py-28 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{color:"var(--orange)"}}>Agentforce & AI</p>
          <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight" style={{fontFamily:"Arial, Helvetica, sans-serif",fontWeight:800}}>
            AI Agents Are the Future.<br/><span style={{color:"var(--orange)"}}>We&apos;ll Show You How to Run Them Right.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mb-8" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
            Cold Sun Global deploys Salesforce Agentforce — autonomous AI agents that handle service requests, dispatch technicians, manage revenue workflows, and reduce manual work at scale. Governed. Enterprise-grade. Built on your data.
          </p>
          <Link href="/contact" className="btn-primary">Talk to an AI Expert →</Link>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">What Is Agentforce</p>
            <h2 className="text-3xl md:text-4xl mb-6 accent-line" style={{color:"var(--navy)"}}>Autonomous AI That Works Within Your Systems</h2>
            <p className="text-gray-600 leading-relaxed mb-5" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
              Agentforce is Salesforce&apos;s next-generation AI agent platform — enabling organizations to deploy autonomous agents that take action, not just generate suggestions. These agents work within your Salesforce environment, using your data, your processes, and your governance rules.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
              The opportunity is significant. But the risk is real — AI that moves faster than your governance, architecture, or operational readiness creates problems, not solutions. That&apos;s where Cold Sun Global&apos;s experience matters most.
            </p>
            <p className="text-gray-600 leading-relaxed" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
              We help you capture the speed advantage of AI while maintaining the control, stability, and long-term value your business requires.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {t:"Agentforce for Service",d:"Handle inbound service cases autonomously — triaging, routing, and resolving with less human intervention."},
              {t:"Agentforce for Field Service",d:"Intelligently dispatch technicians, predict failures, and update customers — all without dispatcher involvement."},
              {t:"Agentforce for Sales",d:"Automate lead follow-up, qualification, and pipeline management — so your reps focus on closing."},
              {t:"Agentforce for Revenue",d:"Autonomous billing, contract management, and renewal workflows that reduce revenue leakage."},
              {t:"Data Cloud Integration",d:"AI agents are only as good as the data they use. We wire Agentforce into your unified Data Cloud profile."},
            ].map(item => (
              <div key={item.t} className="p-5 rounded-xl border border-gray-100 bg-white card-lift">
                <h3 className="font-bold mb-1.5" style={{color:"var(--navy)",fontFamily:"Arial, Helvetica, sans-serif"}}>{item.t}</h3>
                <p className="text-sm text-gray-500" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{background:"var(--off-white)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Our Approach</p>
          <h2 className="text-3xl md:text-4xl mb-10 accent-line" style={{color:"var(--navy)"}}>Speed With Control</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {n:"01",t:"Readiness Assessment",d:"We evaluate your current Salesforce architecture, data quality, and operational processes to determine your AI readiness before any deployment begins."},
              {n:"02",t:"Governed Architecture Design",d:"Every Agentforce deployment is designed with governance guardrails — defining what agents can and cannot do, and where humans stay in the loop."},
              {n:"03",t:"Phased Rollout",d:"We deploy AI agents in controlled phases, measuring performance against business outcomes before expanding scope — eliminating big-bang risk."},
            ].map(s => (
              <div key={s.n} className="p-8 rounded-xl bg-white border border-gray-100 card-lift">
                <div className="text-4xl font-bold mb-4" style={{color:"var(--orange)",fontFamily:"Arial, Helvetica, sans-serif",opacity:0.4}}>{s.n}</div>
                <h3 className="font-bold text-lg mb-3" style={{color:"var(--navy)",fontFamily:"Arial, Helvetica, sans-serif"}}>{s.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Ready to Deploy AI Agents Responsibly?</h2>
          <p className="text-white/70 text-lg mb-8" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Book a complimentary AI readiness assessment with Erik. We&apos;ll identify your highest-value agent opportunities and design a governed rollout plan.</p>
          <Link href="/contact" className="btn-primary">Get an AI Readiness Assessment →</Link>
        </div>
      </section>
    </>
  );
}
