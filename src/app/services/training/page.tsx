import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Training Services" };
export default function Training() {
  return <InnerPage
    label="Training Services"
    headline="Build the Skills"
    headlineAccent="That Make Technology Work."
    subheadline="Cold Sun Global designs and delivers role-based training programs that build genuine capability — not just platform familiarity. For Salesforce, NetSuite, IFS Cloud, and ServiceNow."
    intro="Great training is the bridge between a successful implementation and real business value. Cold Sun Global's training practice designs role-specific, outcome-focused programs that meet your teams where they are — whether that's end-user onboarding, administrator certification prep, or executive platform literacy."
    sections={[
      {title:"End-User Training",body:"Role-based training designed for how people actually do their jobs — not generic platform walkthroughs. Delivered in person, virtually, or as self-paced eLearning."},
      {title:"Administrator Training",body:"Deep-dive training for your platform administrators — configuration, automation, reporting, and governance best practices."},
      {title:"Train-the-Trainer",body:"Empower internal champions to deliver ongoing training across your organization — with structured facilitator guides and content libraries."},
      {title:"Certification Prep",body:"Structured preparation programs for Salesforce, NetSuite, IFS, and ServiceNow certifications — increasing your team's credentials and platform confidence."},
      {title:"Custom eLearning Development",body:"Bespoke eLearning modules built around your specific platform configuration, processes, and terminology — available in your LMS."},
      {title:"Post-Go-Live Refreshers",body:"Targeted refresher training addressing adoption gaps identified through post-go-live monitoring and user feedback."},
    ]}
    ctaHeadline="Ready to Build Platform Capability?"
    ctaBody="Talk to our training specialists. We'll design a training approach that fits your organization's learning culture and go-live timeline."
    ctaLabel="Discuss Your Training Needs →"
  />;
}
