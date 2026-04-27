import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "High Technology and Software" };
export default function Page() {
  return <InnerPage
    label="High Technology and Software"
    headline="Scale Your Tech Business"
    headlineAccent="With the Right Platform."
    subheadline="Cold Sun Global delivers Salesforce, NetSuite, and Sage Intacct solutions for high-technology, software, and IT services companies — from startup scale-up to enterprise transformation."
    intro="High-tech and software companies grow fast and need platforms that scale with them. Cold Sun Global's high-tech practice addresses the unique needs of technology businesses — complex subscription revenue models, fast-moving sales cycles, global operations, and the need to connect product, sales, service, and finance on integrated systems."
    sections={[
      {title:"Subscription & Revenue Management",body:"Salesforce CPQ and Revenue Cloud implementation for SaaS and subscription businesses — managing complex pricing, subscription lifecycles, and ASC 606-compliant revenue recognition."},
      {title:"Salesforce for High-Tech Sales",body:"Salesforce Sales Cloud and Partner Community implementation for high-tech — intelligent pipeline management, partner relationship management, and deal desk workflows."},
      {title:"NetSuite for Software Companies",body:"NetSuite implementation for software and IT services companies — multi-currency financial management, professional services automation, and subsidiary consolidation."},
      {title:"Implementation & Integration",body:"End-to-end platform implementation with integrations to your existing billing, asset, and operational systems."},
      {title:"Managed & Advisory Services",body:"Ongoing platform support and strategic advisory to ensure your systems continue to deliver value as your business evolves."},
      {title:"Change Management & Training",body:"Structured adoption programs that ensure your teams embrace and effectively use the platforms we implement."},
    ]}
    ctaHeadline="Ready to Transform Your High Technology and Software Operations?"
    ctaBody="Talk to Cold Sun Global's High Technology and Software specialists. We'll map your current challenges and design a platform strategy that delivers measurable outcomes."
    ctaLabel="Talk to an Industry Expert →"
  />;
}
