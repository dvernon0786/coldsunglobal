import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Energy & Oil and Gas" };
export default function Page() {
  return <InnerPage
    label="Energy & Oil and Gas"
    headline="Powering the Next Era"
    headlineAccent="of Energy Operations."
    subheadline="Cold Sun Global delivers Salesforce, IFS Cloud, and NetSuite solutions for energy producers, midstream operators, and utilities — connecting field operations, asset management, and customer service on a single intelligent platform."
    intro="Energy and oil and gas organizations operate in one of the most demanding environments in enterprise technology — asset-intensive, compliance-heavy, geographically dispersed, and safety-critical. Cold Sun Global brings 15+ years of field service and ERP transformation experience specifically to this sector."
    sections={[
      {title:"Field Service for Energy",body:"AI-enabled dispatch and technician management for field crews across geographically dispersed operations — with full asset history, compliance records, and work order management."},
      {title:"Asset Lifecycle Management",body:"Track, maintain, and optimize physical assets across their full lifecycle — from commissioning to decommission — with predictive maintenance and regulatory compliance built in."},
      {title:"Customer & Revenue Management",body:"Manage complex energy billing, contract management, and customer service operations on Salesforce — reducing billing errors and improving customer experience."},
      {title:"Implementation & Integration",body:"End-to-end platform implementation with integrations to your existing billing, asset, and operational systems."},
      {title:"Managed & Advisory Services",body:"Ongoing platform support and strategic advisory to ensure your systems continue to deliver value as your business evolves."},
      {title:"Change Management & Training",body:"Structured adoption programs that ensure your teams embrace and effectively use the platforms we implement."},
    ]}
    ctaHeadline="Ready to Transform Your Energy & Oil and Gas Operations?"
    ctaBody="Talk to Cold Sun Global's Energy & Oil and Gas specialists. We'll map your current challenges and design a platform strategy that delivers measurable outcomes."
    ctaLabel="Talk to an Industry Expert →"
  />;
}
