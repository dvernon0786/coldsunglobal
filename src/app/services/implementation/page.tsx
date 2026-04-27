import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Implementation & Integration Services" };
export default function Implementation() {
  return <InnerPage
    label="Implementation & Integration"
    headline="Go Live Faster."
    headlineAccent="Stay Stable Longer."
    subheadline="Cold Sun Global delivers enterprise implementations with speed and discipline — from initial design to production go-live, with integrations that hold up under real-world load."
    intro="Our implementation practice covers the full delivery lifecycle — requirements, design, build, test, train, and go-live. We've delivered 150+ implementations across Salesforce, NetSuite, IFS Cloud, and ServiceNow. We know where projects go wrong, and we design our delivery process to prevent it."
    sections={[
      {title:"Full-Cycle Implementation",body:"End-to-end implementation delivery — from discovery and design through build, UAT, training, and go-live — with dedicated project management throughout."},
      {title:"System Integration",body:"Connect your new platform to existing ERP, CRM, billing, and data systems. REST, SOAP, MuleSoft, Dell Boomi, and middleware-agnostic integration design."},
      {title:"Data Migration",body:"Extract, cleanse, transform, and load your legacy data with precision. We've migrated millions of records — with reconciliation processes that give you confidence in your data."},
      {title:"Configuration & Customization",body:"We configure platforms to your business model — and when customization is needed, we build it with long-term maintainability in mind."},
      {title:"Testing & Quality Assurance",body:"Structured UAT, regression, and performance testing processes — so you go live with confidence, not fingers crossed."},
      {title:"Hypercare & Go-Live Support",body:"Dedicated hypercare support in the first weeks post-go-live. Your team is never alone in the critical early period."},
    ]}
    ctaHeadline="Ready to Start Your Implementation?"
    ctaBody="Talk to the Cold Sun Global delivery team. We'll scope your project honestly and give you a realistic timeline — not an optimistic one."
    ctaLabel="Get an Implementation Scoping Call →"
  />;
}
