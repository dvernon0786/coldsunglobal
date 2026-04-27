import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Professional Services" };
export default function Page() {
  return <InnerPage
    label="Professional Services"
    headline="Run Your Services Business"
    headlineAccent="More Profitably."
    subheadline="Cold Sun Global implements Salesforce, NetSuite, and Sage Intacct for professional services organizations — connecting project delivery, resource management, billing, and revenue recognition on integrated platforms."
    intro="Professional services organizations — consulting, legal, accounting, engineering, and IT services firms — need platforms that connect how they sell, deliver, and bill. Cold Sun Global's professional services practice brings deep expertise in project-based businesses, where resource utilization, billing accuracy, and client experience are the key drivers of profitability."
    sections={[
      {title:"Professional Services Cloud",body:"Salesforce Professional Services Cloud implementation — project management, resource scheduling, time and expense, and client collaboration in a unified platform."},
      {title:"NetSuite for Services",body:"NetSuite implementation for professional services — project accounting, revenue recognition (ASC 606), resource management, and multi-entity consolidation."},
      {title:"Client Lifecycle Management",body:"Salesforce CRM for professional services — managing the full client relationship from business development through engagement delivery and account management."},
      {title:"Implementation & Integration",body:"End-to-end platform implementation with integrations to your existing billing, asset, and operational systems."},
      {title:"Managed & Advisory Services",body:"Ongoing platform support and strategic advisory to ensure your systems continue to deliver value as your business evolves."},
      {title:"Change Management & Training",body:"Structured adoption programs that ensure your teams embrace and effectively use the platforms we implement."},
    ]}
    ctaHeadline="Ready to Transform Your Professional Services Operations?"
    ctaBody="Talk to Cold Sun Global's Professional Services specialists. We'll map your current challenges and design a platform strategy that delivers measurable outcomes."
    ctaLabel="Talk to an Industry Expert →"
  />;
}
