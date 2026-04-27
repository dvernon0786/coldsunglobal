import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Migration Services" };
export default function Migration() {
  return <InnerPage
    label="Migration Services"
    headline="Legacy Systems."
    headlineAccent="Modern Futures."
    subheadline="Cold Sun Global specializes in complex platform migrations — from ClickSoftware and ServiceMax to Salesforce Field Service, and from on-premise ERP to modern cloud platforms."
    intro="Migration is the highest-risk moment in any enterprise transformation. Cold Sun Global has designed and delivered migrations across some of the most complex FSM and ERP environments in energy, telecom, and healthcare. We know where migrations fail — and we build our delivery methodology around preventing it."
    sections={[
      {title:"ClickSoftware Migration",body:"The most technically complex FSM migration. We've completed many ClickSoftware-to-Salesforce migrations. We know the data model, the configuration traps, and the cutover risks."},
      {title:"ServiceMax Migration",body:"Structured migration from ServiceMax to Salesforce Field Service — preserving your historical service data, asset records, and business logic."},
      {title:"On-Premise to Cloud ERP",body:"Migration from legacy on-premise ERP (SAP, Oracle E-Business, Epicor) to NetSuite, IFS Cloud, or Sage Intacct — with full data migration and integration rebuild."},
      {title:"Legacy CRM Migration",body:"Migration from older CRM platforms (Siebel, Microsoft Dynamics, Sugar) to Salesforce — with data mapping, cleansing, and business process realignment."},
      {title:"Data Migration & Cleansing",body:"Extract, profile, cleanse, and load your legacy data with precision. Our data migration process includes reconciliation gates and rollback plans."},
      {title:"Parallel Run & Cutover Management",body:"Structured parallel run periods and controlled cutover execution — minimizing business disruption and ensuring a clean transition."},
    ]}
    ctaHeadline="Planning a Platform Migration?"
    ctaBody="Schedule a migration planning session with Erik. Walk away with a realistic roadmap, risk register, and timeline — before you've committed to anything."
    ctaLabel="Book a Migration Planning Session →"
  />;
}
