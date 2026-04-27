import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Nonprofit" };
export default function Page() {
  return <InnerPage
    label="Nonprofit"
    headline="Amplify Your Impact."
    headlineAccent="Not Your Admin Burden."
    subheadline="Cold Sun Global delivers Salesforce Nonprofit Success Pack (NPSP) and Sage Intacct solutions for nonprofit organizations — connecting donor management, program delivery, and financial operations."
    intro="Nonprofit organizations need the same quality of enterprise technology as their for-profit counterparts — but with solutions designed for their unique operating model, reporting requirements, and budget constraints. Cold Sun Global's nonprofit practice brings deep experience with NPSP, Salesforce Flows, and Sage Intacct to help mission-driven organizations maximize impact."
    sections={[
      {title:"Salesforce NPSP Implementation",body:"Nonprofit Success Pack implementation — constituent management, donation tracking, grant management, and program outcome reporting on Salesforce."},
      {title:"Donor & Fundraising Management",body:"Salesforce-based donor lifecycle management — from prospect identification and cultivation through campaign management, stewardship, and retention."},
      {title:"Nonprofit Financial Management",body:"Sage Intacct for nonprofits — fund accounting, grant tracking, restricted revenue management, and board-ready financial reporting."},
      {title:"Implementation & Integration",body:"End-to-end platform implementation with integrations to your existing billing, asset, and operational systems."},
      {title:"Managed & Advisory Services",body:"Ongoing platform support and strategic advisory to ensure your systems continue to deliver value as your business evolves."},
      {title:"Change Management & Training",body:"Structured adoption programs that ensure your teams embrace and effectively use the platforms we implement."},
    ]}
    ctaHeadline="Ready to Transform Your Nonprofit Operations?"
    ctaBody="Talk to Cold Sun Global's Nonprofit specialists. We'll map your current challenges and design a platform strategy that delivers measurable outcomes."
    ctaLabel="Talk to an Industry Expert →"
  />;
}
