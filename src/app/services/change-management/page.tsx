import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Change Management" };
export default function ChangeManagement() {
  return <InnerPage
    label="Change Management"
    headline="Technology Only Works"
    headlineAccent="If People Use It."
    subheadline="Cold Sun Global embeds change management into every transformation — ensuring your organization is ready, willing, and able to adopt the new systems you've invested in."
    intro="The number one reason enterprise implementations fail isn't the technology — it's adoption. Cold Sun Global's change management practice addresses the human side of transformation: preparing stakeholders, building capability, communicating change, and measuring adoption. We treat organizational readiness as a delivery requirement, not an afterthought."
    sections={[
      {title:"Stakeholder Analysis & Alignment",body:"Identify and engage key stakeholders early. Understand their concerns, secure their sponsorship, and build the coalition needed to drive adoption."},
      {title:"Change Impact Assessment",body:"Map the full impact of your transformation on people, process, and organization — so you can address resistance before it becomes obstruction."},
      {title:"Communication Planning",body:"Structured, multi-channel communication plans that keep stakeholders informed, engaged, and aligned throughout the transformation lifecycle."},
      {title:"Training & Capability Building",body:"Role-based training programs that build genuine capability — not checkbox completion. We design training for how adults actually learn."},
      {title:"Adoption Measurement",body:"Define and track adoption KPIs from day one. We measure what matters — not just login rates, but process compliance and business outcome achievement."},
      {title:"Sustained Change Management",body:"Change doesn't stop at go-live. We provide sustained support to embed new behaviors, address emerging resistance, and drive lasting adoption."},
    ]}
    ctaHeadline="Don't Let Adoption Kill Your ROI"
    ctaBody="Talk to our change management specialists. We'll design a people strategy that makes your technology investment stick."
    ctaLabel="Get a Change Readiness Assessment →"
  />;
}
