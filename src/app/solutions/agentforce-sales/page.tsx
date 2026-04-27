import { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";
export const metadata: Metadata = { title: "Agentforce Sales — Sales Cloud" };
export default function AgentforceSales() {
  return <SolutionPage
    label="Agentforce Sales"
    headline="Close More. Admin Less."
    accent="AI-Powered Sales on Salesforce."
    subheadline="Cold Sun Global implements Agentforce Sales Cloud — giving your sales teams AI agents that handle lead follow-up, qualification, pipeline management, and forecasting, so your reps focus on what they do best: closing."
    whyTitle="Sales Teams Spend Too Much Time on the Wrong Things"
    whyBody="Studies consistently show that sales reps spend less than 30% of their time actually selling. The rest is consumed by data entry, follow-up emails, pipeline updates, and internal coordination. Agentforce Sales changes that equation — deploying AI agents that handle the administrative and repetitive work, while your team focuses on relationships and revenue."
    whyPoints={[
      "AI agents that autonomously follow up with leads and book meetings",
      "Real-time pipeline intelligence and deal scoring",
      "Guided selling with next-best-action recommendations",
      "Automated forecasting connected to actual deal data",
      "Partner portal and channel management on Experience Cloud",
    ]}
    cards={[
      { title:"Lead Management & Qualification", body:"AI agents that score, prioritize, and follow up with inbound leads — ensuring no opportunity falls through the cracks while your reps focus on the highest-value prospects." },
      { title:"Opportunity & Pipeline Management", body:"Intelligent pipeline management with AI-generated deal insights, risk flags, and next-best-action recommendations — giving managers real visibility and reps clear guidance." },
      { title:"Sales Forecasting", body:"Connected forecasting built on real deal data — not spreadsheet estimates. AI-powered projections that finance and leadership can actually trust." },
      { title:"Quote & Proposal Automation", body:"Salesforce CPQ integrated with Sales Cloud — so reps generate accurate, professional quotes directly from opportunity records, with automated approval workflows." },
      { title:"Partner Relationship Management", body:"Manage your channel partner ecosystem on Salesforce — deal registration, joint pipeline tracking, partner enablement, and co-selling workflows in a single platform." },
      { title:"Sales Agentforce Deployment", body:"Custom AI sales agents trained on your product catalog, ideal customer profile, and sales playbooks — autonomously handling outreach, scheduling, and pipeline hygiene." },
    ]}
    stepsTitle="Our Agentforce Sales Approach"
    steps={[
      { title:"Sales Process Assessment", body:"We map your current sales process, tech stack, and CRM maturity — identifying where AI agents will have the fastest and highest-value impact." },
      { title:"Sales Cloud Architecture", body:"We design your Sales Cloud implementation around your specific sales motion — field sales, inside sales, channel, or a hybrid — with Agentforce agents built in from the start." },
      { title:"Implementation & Enablement", body:"Full Sales Cloud implementation with role-based training, manager dashboards, and Agentforce agent deployment — followed by hypercare support to drive adoption." },
    ]}
    benefitsTitle="What Agentforce Sales Delivers"
    benefits={[
      { title:"More Selling Time", body:"AI agents handle lead follow-up, data entry, and pipeline updates — giving reps back hours every week to focus on conversations that close deals." },
      { title:"Faster Lead Response", body:"AI agents respond to inbound leads instantly — at any hour — qualifying interest and booking meetings before competitors even open the email." },
      { title:"Accurate Revenue Forecasts", body:"Pipeline forecasting built on real deal activity and AI deal scoring — not gut feel — giving leadership reliable revenue projections." },
      { title:"Higher Win Rates", body:"Next-best-action guidance, deal risk alerts, and AI coaching help reps navigate complex deals more effectively — improving overall win rate." },
    ]}
    ctaHeadline="Give Your Sales Team an AI Advantage"
    ctaBody="Talk to Cold Sun Global's Agentforce Sales specialists. We'll design a Sales Cloud implementation that deploys AI agents where they have the highest impact on your pipeline."
    ctaLabel="Talk to a Sales Cloud Expert →"
    relatedLinks={[{ label:"Agentforce & AI →", href:"/solutions/agentforce" },{ label:"Revenue Management →", href:"/solutions/revenue-management" }]}
  />;
}
