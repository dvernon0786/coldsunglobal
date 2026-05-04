import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Services — End-to-End Enterprise Transformation" };

const services = [
  {
    icon: "🎯",
    title: "Consulting",
    href: "/services/consulting",
    desc: "Platform-agnostic business consulting — process analysis, platform selection, architecture review, and Salesforce program governance. We help you design the right solution before you build anything.",
    when: "Use when you need expert guidance on platform fit, process redesign, or strategic roadmap development.",
  },
  {
    icon: "⚙️",
    title: "Implementation & Integration",
    href: "/services/implementation",
    desc: "Full-cycle implementation delivery across Salesforce, NetSuite, IFS Cloud, and ServiceNow — from discovery and design through build, UAT, training, and go-live. 150+ implementations delivered.",
    when: "Use when you're ready to build and need a delivery team that has done this before.",
  },
  {
    icon: "🛡️",
    title: "Managed & Advisory Services",
    href: "/services/managed-services",
    desc: "Ongoing platform administration, release management, technical support, and strategic advisory — so your platforms continue to deliver value long after go-live.",
    when: "Use when your implementation is live and you need a long-term platform partner.",
  },
  {
    icon: "🔄",
    title: "Change Management",
    href: "/services/change-management",
    desc: "Structured organizational change management — stakeholder alignment, communication planning, training, and adoption measurement. Because technology only works if people use it.",
    when: "Use when your transformation requires significant process change or workforce adoption.",
  },
  {
    icon: "🚚",
    title: "Migration Services",
    href: "/services/migration",
    desc: "Complex platform migrations — ClickSoftware to Salesforce, ServiceMax to Salesforce Field Service, on-premise ERP to cloud. We've navigated the hardest migrations in FSM and ERP.",
    when: "Use when you're moving off a legacy system and need a team that knows where migrations fail.",
  },
  {
    icon: "📚",
    title: "Training",
    href: "/services/training",
    desc: "Role-based training programs for end users, administrators, and developers — designed around how adults actually learn, not just checkbox compliance. Classroom, virtual, and eLearning formats.",
    when: "Use when go-live is approaching or when adoption metrics are below expectations.",
  },
  {
    icon: "👥",
    title: "Talent Management",
    href: "/services/talent-management",
    desc: "Certified platform talent — staff augmentation, embedded delivery teams, and talent strategy advisory. Access to a global network of Salesforce, NetSuite, IFS, and ServiceNow specialists.",
    when: "Use when you need certified platform expertise that you don't have internally.",
  },
];

export default function ServicesIndex() {
  return (
    <>
      {/* Hero */}
      <section className="hero-grid py-28 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{ color: "var(--orange)" }}>Services</p>
          <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 800 }}>
            End-to-End Coverage.<br /><span style={{ color: "var(--orange)" }}>From Strategy to Support.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mb-10" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            Cold Sun Global provides the full spectrum of enterprise transformation services — so you have one trusted partner from initial consulting through go-live, adoption, and ongoing optimization.
          </p>
          <Link href="/contact" className="btn-primary">Talk to an Expert →</Link>
        </div>
      </section>

      {/* How engagements work */}
      <section className="py-16 px-6" style={{ background: "var(--off-white)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-6">How Engagements Work</p>
          <div className="flex flex-col md:flex-row gap-0 md:gap-0">
            {[
              { n: "01", t: "Strategy Session", d: "45-min call with Erik. Roadmap, ROI projection, platform fit." },
              { n: "02", t: "Consulting & Design", d: "We design the right solution for your business." },
              { n: "03", t: "Implementation", d: "We build, test, train, and go live — on time." },
              { n: "04", t: "Adoption & Change", d: "We ensure your teams actually use what we built." },
              { n: "05", t: "Ongoing Partnership", d: "Managed services and advisory to keep your platform healthy." },
            ].map((step, i) => (
              <div key={step.n} className="flex-1 relative">
                <div className="p-6 rounded-xl bg-white border border-gray-100 mx-1">
                  <div className="text-3xl font-bold mb-2" style={{ color: "var(--orange)", fontFamily: "Arial, Helvetica, sans-serif", opacity: 0.5 }}>{step.n}</div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "var(--navy)", fontFamily: "Arial, Helvetica, sans-serif" }}>{step.t}</h3>
                  <p className="text-xs text-gray-500" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{step.d}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10 w-4 h-4 rounded-full items-center justify-center" style={{ background: "var(--orange)" }}>
                    <ArrowRight size={10} className="text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Service Areas</p>
          <h2 className="text-3xl md:text-4xl mb-12 accent-line" style={{ color: "var(--navy)" }}>
            Every Service You Need. One Team.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map(svc => (
              <Link key={svc.href} href={svc.href}
                className="card-lift block p-8 rounded-xl border border-gray-100 bg-white hover:border-orange-200 group">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{svc.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors" style={{ color: "var(--navy)", fontFamily: "Arial, Helvetica, sans-serif" }}>
                      {svc.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                      {svc.desc}
                    </p>
                    <div className="p-3 rounded-lg text-xs" style={{ background: "var(--off-white)", fontFamily: "Arial, Helvetica, sans-serif", color: "var(--grey-text)" }}>
                      <strong style={{ color: "var(--orange)" }}>When to use: </strong>{svc.when}
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold mt-4" style={{ color: "var(--orange)", fontFamily: "Arial, Helvetica, sans-serif" }}>
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-20 px-6" style={{ background: "var(--navy-deep)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{ color: "var(--orange)" }}>Engagement Models</p>
          <h2 className="text-3xl md:text-4xl text-white mb-10" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            We Work the Way You Need
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Project-Based", desc: "Defined scope, timeline, and fixed outcome. Best for implementations, migrations, and well-scoped consulting engagements. Clear deliverables. Mutual accountability.", badge: "Most Common" },
              { title: "Managed Services", desc: "Ongoing retainer with defined SLAs, scope, and response commitments. Best for post-go-live platform support, administration, and continuous improvement.", badge: "Post Go-Live" },
              { title: "Staff Augmentation", desc: "Certified Cold Sun Global consultants embedded in your team. Best when you need specific expertise for a defined period without full project ownership.", badge: "Flexible" },
            ].map(m => (
              <div key={m.title} className="p-8 rounded-xl border border-white/10 bg-white/5">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full mb-4 inline-block" style={{ background: "var(--orange)", color: "white", fontFamily: "Arial, Helvetica, sans-serif" }}>{m.badge}</span>
                <h3 className="text-xl text-white font-bold mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{m.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">Discuss the Right Engagement Model →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
