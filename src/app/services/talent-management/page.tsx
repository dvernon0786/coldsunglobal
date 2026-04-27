import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Talent Management" };
export default function TalentManagement() {
  return <InnerPage
    label="Talent Management"
    headline="The Right People."
    headlineAccent="At the Right Time."
    subheadline="Cold Sun Global helps organizations build, source, and retain the Salesforce and ERP talent they need — whether that's staff augmentation, embedded resourcing, or talent strategy advisory."
    intro="Talent is the constraint in every enterprise transformation. Certified Salesforce architects, NetSuite administrators, and IFS Cloud specialists are scarce and in high demand. Cold Sun Global gives organizations access to a global talent network — providing embedded resources, staff augmentation, and talent strategy advisory backed by 15+ years of delivery experience."
    sections={[
      {title:"Staff Augmentation",body:"Certified Salesforce, NetSuite, IFS, and ServiceNow professionals embedded in your team — on a contract basis, at the seniority level you need."},
      {title:"Embedded Delivery Teams",body:"Full Cold Sun Global delivery teams placed inside your organization — providing continuity, accountability, and expertise for long-running programs."},
      {title:"Talent Strategy Advisory",body:"Build-buy-borrow analysis for your technology talent needs. We help you design a talent model that balances cost, capability, and control."},
      {title:"Certification Support",body:"Support your internal team's certification journey — with training resources, study materials, and exam prep programs."},
      {title:"Interim CIO/CTO Support",body:"Senior technology leadership on an interim basis — for organizations going through transformation without permanent executive capacity."},
      {title:"Delivery Oversight",body:"Independent delivery assurance and program oversight for large transformation programs — bringing Cold Sun Global's delivery expertise to your existing team."},
    ]}
    ctaHeadline="Need Certified Platform Talent?"
    ctaBody="Talk to Cold Sun Global's talent team. We'll identify the right resourcing model for your program — from single specialist to embedded delivery team."
    ctaLabel="Discuss Talent Needs →"
  />;
}
