import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Home and Business Services" };
export default function Page() {
  return <InnerPage
    label="Home and Business Services"
    headline="Scale Your Service Business."
    headlineAccent="Intelligently."
    subheadline="Cold Sun Global delivers Salesforce Field Service and CRM solutions for home and business services organizations — enabling intelligent scheduling, customer experience, and operational efficiency at scale."
    intro="Home and business services companies compete on speed, reliability, and customer experience. Cold Sun Global's field service expertise translates directly to high-volume residential and commercial service operations — enabling smarter scheduling, better technician productivity, and the kind of customer experience that drives loyalty and referrals."
    sections={[
      {title:"Field Service for Home Services",body:"Intelligent scheduling and dispatch for high-volume residential and commercial service operations — with customer self-service, automated notifications, and mobile technician tools."},
      {title:"Customer Experience & CRM",body:"Salesforce CRM and Service Cloud implementation for home services — managing the full customer relationship from lead to lifetime value."},
      {title:"Operations & Workforce Management",body:"Real-time operational dashboards, technician performance management, and workforce scheduling optimization — driving productivity and margin improvement."},
      {title:"Implementation & Integration",body:"End-to-end platform implementation with integrations to your existing billing, asset, and operational systems."},
      {title:"Managed & Advisory Services",body:"Ongoing platform support and strategic advisory to ensure your systems continue to deliver value as your business evolves."},
      {title:"Change Management & Training",body:"Structured adoption programs that ensure your teams embrace and effectively use the platforms we implement."},
    ]}
    ctaHeadline="Ready to Transform Your Home and Business Services Operations?"
    ctaBody="Talk to Cold Sun Global's Home and Business Services specialists. We'll map your current challenges and design a platform strategy that delivers measurable outcomes."
    ctaLabel="Talk to an Industry Expert →"
  />;
}
