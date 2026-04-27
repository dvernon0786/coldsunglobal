import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Consulting Services" };
export default function Consulting() {
  return <InnerPage
    label="Consulting Services"
    headline="Unlock Business Success"
    headlineAccent="With Tailored Solutions."
    subheadline="Cold Sun Global's consulting practice helps organizations improve operational efficiency, streamline processes, and drive measurable outcomes across Salesforce, ERP, and enterprise platforms."
    intro="We specialize in consulting services designed to drive business success. With deep expertise across Salesforce, NetSuite, IFS Cloud, and ServiceNow, we help businesses understand their goals, analyze existing processes, and design solutions that deliver real impact. Our consultants have personally delivered complex transformations — not just advised on them."
    sections={[
      {title:"Business Consulting & Optimization",body:"Understand your business goals and analyze existing processes to design platform solutions that improve efficiency and deliver measurable outcomes."},
      {title:"Health Readiness & System Upgrades",body:"Thorough health check assessments to identify system inefficiencies, technical debt, and upgrade opportunities before they become problems."},
      {title:"Platform Selection & Fit Analysis",body:"Platform-agnostic guidance on whether Salesforce, NetSuite, IFS, or ServiceNow is the right tool — based on your business model, not our vendor relationships."},
      {title:"Salesforce Program Governance",body:"Strategic oversight of your Salesforce program — roadmap management, release governance, and stakeholder alignment across the enterprise."},
      {title:"Architecture Review",body:"Deep technical review of your current architecture with recommendations for scalability, integration patterns, and technical debt reduction."},
      {title:"Pre-Implementation Readiness",body:"Organizational, data, and process readiness assessments before go-live — so your implementation starts right and stays on track."},
    ]}
    capabilities={[
      "15+ years consulting experience across 5 platforms",
      "Certified architects and senior business consultants",
      "Industry expertise across 10 verticals",
      "Presence in NA, UK, EU, and India",
    ]}
    ctaHeadline="Ready to Transform Your Business?"
    ctaBody="Schedule a complimentary consultation with Erik. We'll assess your current state and design a clear path to your target operating model."
    ctaLabel="Book a Consultation →"
  />;
}
