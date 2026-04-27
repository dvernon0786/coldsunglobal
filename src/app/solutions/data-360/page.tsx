import { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";
export const metadata: Metadata = { title: "Data 360 — Salesforce Data Cloud" };
export default function Data360() {
  return <SolutionPage
    label="Data 360 — Salesforce Data Cloud"
    headline="Your AI Is Only as Good"
    accent="as Your Data."
    subheadline="Cold Sun Global implements Salesforce Data Cloud to unify your customer, asset, service, and operational data into a single real-time profile — the foundation for every AI agent, automation, and decision your business makes."
    whyTitle="Disconnected Data Is the Root Cause of Most Enterprise Problems"
    whyBody="Your CRM has one version of the customer. Your ERP has another. Your field service system has a third. None of them agree. The result: poor AI performance, bad automation decisions, inconsistent customer experiences, and reporting you don't trust. Salesforce Data Cloud solves this by unifying every data source into a single, real-time, actionable profile — and Cold Sun Global implements it with the discipline to make it last."
    whyPoints={[
      "Unified customer and asset profiles across CRM, ERP, and FSM systems",
      "Real-time data activation for AI agents and automated workflows",
      "Identity resolution across fragmented customer records",
      "360-degree view connecting service history, assets, and revenue data",
      "Foundation for Agentforce — AI agents need unified data to work correctly",
    ]}
    cards={[
      { title:"Data Unification & Harmonization", body:"Ingest data from Salesforce, ERP, field service, IoT, and third-party sources — harmonizing schemas, resolving identities, and creating a single golden record for every customer and asset." },
      { title:"Real-Time Profile Activation", body:"Customer and asset profiles that update in real time as events occur — triggering AI agents, automations, and personalized experiences based on current context, not yesterday's batch data." },
      { title:"Identity Resolution", body:"Stitch together fragmented customer records across systems using deterministic and probabilistic matching — eliminating duplicates and creating complete, trustworthy profiles." },
      { title:"Segmentation & Audience Building", body:"Build dynamic customer and asset segments based on unified profile data — for targeted service outreach, proactive maintenance programs, and personalized customer experiences." },
      { title:"Agentforce Data Foundation", body:"Configure Data Cloud as the data layer for your Agentforce agents — ensuring every AI decision is made with complete, accurate, real-time context from across your enterprise." },
      { title:"Analytics & Insights", body:"Surface actionable insights from unified data through Salesforce dashboards and Einstein Analytics — giving operations, service, and leadership teams the information they need when they need it." },
    ]}
    stepsTitle="Our Data 360 Implementation Approach"
    steps={[
      { title:"Data Landscape Assessment", body:"We map every data source in your enterprise — CRM, ERP, FSM, IoT, billing — and assess data quality, schema complexity, and integration architecture before any build begins." },
      { title:"Data Cloud Architecture & Design", body:"We design your Data Cloud solution: data streams, schema mappings, identity resolution rules, calculated insights, and activation targets — all documented and reviewed before deployment." },
      { title:"Implementation, Integration & Validation", body:"We build, test, and validate your Data Cloud implementation with rigorous data quality checks — ensuring unified profiles are accurate, complete, and ready to power AI and automation." },
    ]}
    benefitsTitle="What Unified Data Unlocks"
    benefits={[
      { title:"AI That Actually Works", body:"Agentforce agents make better decisions when they have complete, real-time data. Data Cloud is what turns AI potential into AI performance." },
      { title:"Consistent Customer Experience", body:"Every service interaction, sales touchpoint, and automated communication is informed by the same complete customer profile — delivering consistency across channels." },
      { title:"Trusted Reporting", body:"When every system draws from the same unified data foundation, your reports, forecasts, and dashboards finally agree — and leadership can act on them with confidence." },
      { title:"Proactive Service at Scale", body:"Real-time asset and customer profiles enable proactive outreach — contacting customers before they experience issues, rather than reacting after they call." },
    ]}
    ctaHeadline="Build the Data Foundation Your AI Deserves"
    ctaBody="Talk to Cold Sun Global's Data Cloud specialists. We'll assess your current data landscape and design a unification architecture that makes every downstream system — AI, automation, and analytics — more powerful."
    ctaLabel="Get a Data Readiness Assessment →"
    relatedLinks={[{ label:"Agentforce & AI →", href:"/solutions/agentforce" },{ label:"Salesforce Overview →", href:"/solutions/salesforce" }]}
  />;
}
