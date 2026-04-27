import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Utilities" };
export default function Page() {
  return <InnerPage
    label="Utilities"
    headline="Modernize Utility"
    headlineAccent="Operations End-to-End."
    subheadline="Cold Sun Global delivers Salesforce, IFS Cloud, and NetSuite solutions for electric, gas, and water utilities — connecting field operations, asset management, customer service, and revenue management."
    intro="Utilities face a perfect storm of operational challenges — aging infrastructure, regulatory complexity, workforce transformation, and rising customer expectations. Cold Sun Global's utilities practice brings deep experience in field service, asset management, and customer information systems to investor-owned and municipal utilities across North America."
    sections={[
      {title:"Utility Field Service",body:"Salesforce Field Service implementation for utilities — meter service, outage management, vegetation management, and infrastructure maintenance with intelligent dispatch and mobile tools."},
      {title:"Asset & Work Management",body:"IFS Cloud implementation for utility asset management — from transmission and distribution infrastructure to generation assets, with full work management and compliance documentation."},
      {title:"Customer Experience",body:"Salesforce-based customer information and engagement — from service requests and billing inquiries through outage communications and digital self-service."},
      {title:"Implementation & Integration",body:"End-to-end platform implementation with integrations to your existing billing, asset, and operational systems."},
      {title:"Managed & Advisory Services",body:"Ongoing platform support and strategic advisory to ensure your systems continue to deliver value as your business evolves."},
      {title:"Change Management & Training",body:"Structured adoption programs that ensure your teams embrace and effectively use the platforms we implement."},
    ]}
    ctaHeadline="Ready to Transform Your Utilities Operations?"
    ctaBody="Talk to Cold Sun Global's Utilities specialists. We'll map your current challenges and design a platform strategy that delivers measurable outcomes."
    ctaLabel="Talk to an Industry Expert →"
  />;
}
