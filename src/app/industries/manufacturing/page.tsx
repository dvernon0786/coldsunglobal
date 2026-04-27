import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Manufacturing" };
export default function Page() {
  return <InnerPage
    label="Manufacturing"
    headline="Smarter Manufacturing."
    headlineAccent="Connected Operations."
    subheadline="Cold Sun Global delivers Salesforce, NetSuite, and IFS Cloud solutions for manufacturers — connecting production, field service, customer management, and financial operations on integrated enterprise platforms."
    intro="Manufacturing organizations are under pressure to modernize operations, improve service margins, and connect the shop floor to the customer. Cold Sun Global's manufacturing practice brings deep ERP and field service expertise to discrete and process manufacturers across North America, Europe, and India."
    sections={[
      {title:"Field Service for Equipment",body:"Manage warranty service, planned maintenance, and break-fix for manufactured equipment — with mobile technician tools, parts management, and SLA compliance."},
      {title:"NetSuite for Manufacturing",body:"NetSuite ERP implementation for manufacturers — inventory management, production planning, demand forecasting, and multi-location financial consolidation."},
      {title:"Customer & Dealer Management",body:"Salesforce-based dealer portal, warranty management, and customer service operations — connecting your distribution network and end customers to your business systems."},
      {title:"Implementation & Integration",body:"End-to-end platform implementation with integrations to your existing billing, asset, and operational systems."},
      {title:"Managed & Advisory Services",body:"Ongoing platform support and strategic advisory to ensure your systems continue to deliver value as your business evolves."},
      {title:"Change Management & Training",body:"Structured adoption programs that ensure your teams embrace and effectively use the platforms we implement."},
    ]}
    ctaHeadline="Ready to Transform Your Manufacturing Operations?"
    ctaBody="Talk to Cold Sun Global's Manufacturing specialists. We'll map your current challenges and design a platform strategy that delivers measurable outcomes."
    ctaLabel="Talk to an Industry Expert →"
  />;
}
