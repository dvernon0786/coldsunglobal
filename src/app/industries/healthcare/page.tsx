import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Healthcare and Life Sciences" };
export default function Page() {
  return <InnerPage
    label="Healthcare and Life Sciences"
    headline="Connected Healthcare."
    headlineAccent="Delivered at Scale."
    subheadline="Cold Sun Global implements Salesforce Health Cloud, NetSuite, and ServiceNow for health systems, medical device manufacturers, and life sciences organizations — improving patient experience, operational efficiency, and regulatory compliance."
    intro="The healthcare and life sciences sector demands more from enterprise technology than any other industry — complex regulatory requirements, patient safety implications, and the need to connect clinical, operational, and financial data across fragmented systems. Cold Sun Global brings deep healthcare domain knowledge to every engagement."
    sections={[
      {title:"Salesforce Health Cloud",body:"Unified patient and member management on Salesforce Health Cloud — connecting clinical teams, service coordinators, and administrative staff on a single patient-centric platform."},
      {title:"Medical Device Field Service",body:"Field service management for medical device maintenance and biomedical engineering — with compliance documentation, SLA management, and asset tracking."},
      {title:"Revenue Cycle & ERP",body:"NetSuite and Sage Intacct implementations for healthcare financial management — revenue recognition, cost center reporting, and grant management."},
      {title:"Implementation & Integration",body:"End-to-end platform implementation with integrations to your existing billing, asset, and operational systems."},
      {title:"Managed & Advisory Services",body:"Ongoing platform support and strategic advisory to ensure your systems continue to deliver value as your business evolves."},
      {title:"Change Management & Training",body:"Structured adoption programs that ensure your teams embrace and effectively use the platforms we implement."},
    ]}
    ctaHeadline="Ready to Transform Your Healthcare and Life Sciences Operations?"
    ctaBody="Talk to Cold Sun Global's Healthcare and Life Sciences specialists. We'll map your current challenges and design a platform strategy that delivers measurable outcomes."
    ctaLabel="Talk to an Industry Expert →"
  />;
}
