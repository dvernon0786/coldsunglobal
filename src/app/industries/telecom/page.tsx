import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Telecommunications" };
export default function Page() {
  return <InnerPage
    label="Telecommunications"
    headline="Telecom Transformation"
    headlineAccent="at Scale."
    subheadline="Cold Sun Global delivers Salesforce, IFS Cloud, and NetSuite solutions for telecommunications operators — from network field service and technician dispatch to subscriber management and revenue operations."
    intro="Telecommunications organizations face simultaneous pressure on network quality, customer experience, and operational cost. Cold Sun Global's telecom practice addresses all three — with proven delivery experience at carriers including Rogers, Bell, Cogeco, and NorthwesTel across field service, CRM, and revenue management."
    sections={[
      {title:"Telecoms Field Service",body:"Intelligent scheduling and dispatch for installation, repair, and network maintenance technicians — reducing truck rolls, improving first-time fix rates, and increasing technician productivity."},
      {title:"Subscriber & Revenue Management",body:"Salesforce-based subscriber lifecycle management — from order management and provisioning through billing, renewal, and churn prevention."},
      {title:"Network Asset Management",body:"IFS Cloud and Salesforce-based network asset management — tracking physical infrastructure, maintenance schedules, and capacity planning at scale."},
      {title:"Implementation & Integration",body:"End-to-end platform implementation with integrations to your existing billing, asset, and operational systems."},
      {title:"Managed & Advisory Services",body:"Ongoing platform support and strategic advisory to ensure your systems continue to deliver value as your business evolves."},
      {title:"Change Management & Training",body:"Structured adoption programs that ensure your teams embrace and effectively use the platforms we implement."},
    ]}
    ctaHeadline="Ready to Transform Your Telecommunications Operations?"
    ctaBody="Talk to Cold Sun Global's Telecommunications specialists. We'll map your current challenges and design a platform strategy that delivers measurable outcomes."
    ctaLabel="Talk to an Industry Expert →"
  />;
}
