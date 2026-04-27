import { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";
export const metadata: Metadata = { title: "Agentforce Service — Service Cloud" };
export default function AgentforceService() {
  return <SolutionPage
    label="Agentforce Service"
    headline="Resolve More. Escalate Less."
    accent="AI Service on Salesforce."
    subheadline="Cold Sun Global implements Agentforce Service Cloud — deploying AI agents that autonomously handle inbound cases, route complex issues to the right agents, and give your service teams the context they need to resolve faster."
    whyTitle="Service Organizations Are Under More Pressure Than Ever"
    whyBody="Customer expectations are rising while budgets are shrinking. Service leaders are asked to do more with less — faster resolution, higher CSAT, lower cost per contact. Agentforce Service Cloud gives you an AI-powered service operation that handles routine work autonomously, while elevating the experience for cases that truly need a human touch."
    whyPoints={[
      "AI agents that handle tier-1 cases autonomously end-to-end",
      "Omnichannel case management across phone, email, chat, and portal",
      "AI-powered case routing to the right agent with full context",
      "Knowledge base creation and AI-suggested article recommendations",
      "Connected field service handoff when on-site resolution is needed",
    ]}
    cards={[
      { title:"AI Case Management", body:"Agentforce agents triage, categorize, and route inbound cases automatically — resolving routine inquiries autonomously and escalating complex cases with full context to human agents." },
      { title:"Omnichannel Service Delivery", body:"Manage customer interactions across email, phone, chat, SMS, and self-service portal in a single unified workspace — with AI agents handling deflection across all channels." },
      { title:"Knowledge Management", body:"AI-assisted knowledge base creation, maintenance, and recommendation — ensuring agents and customers always have access to the most accurate resolution content." },
      { title:"Agent Assist & Copilot", body:"Real-time AI assistance for human service agents — suggesting responses, surfacing relevant knowledge, and recommending next best actions during live customer interactions." },
      { title:"Service Analytics & Dashboards", body:"Operational dashboards tracking case volume, handle time, CSAT, first-contact resolution, and SLA compliance — with AI-generated insights on performance trends and improvement opportunities." },
      { title:"Field Service Integration", body:"Seamless handoff between Service Cloud and Salesforce Field Service — when a case requires an on-site visit, dispatch is triggered automatically with full case context transferred." },
    ]}
    stepsTitle="Our Agentforce Service Approach"
    steps={[
      { title:"Service Operations Assessment", body:"We analyze your current service volume, case mix, channel distribution, and escalation patterns — identifying exactly where AI agents will have the fastest measurable impact." },
      { title:"Service Cloud Architecture & Agent Design", body:"We design your Service Cloud environment and Agentforce agents around your specific case types, routing rules, SLA requirements, and knowledge base structure." },
      { title:"Phased Implementation & Enablement", body:"Controlled rollout of Service Cloud capabilities and AI agents in phases — with agent training, supervisor dashboards, and adoption measurement from day one." },
    ]}
    benefitsTitle="Service Transformation That's Measurable"
    benefits={[
      { title:"Lower Cost Per Contact", body:"AI agents resolving tier-1 cases autonomously dramatically reduce the volume of cases requiring human agent time — lowering your blended cost per contact." },
      { title:"Faster Resolution Times", body:"Instant case triage, intelligent routing, and AI-suggested resolutions reduce average handle time and improve first-contact resolution rates." },
      { title:"Higher CSAT Scores", body:"Faster, more consistent, and more personalized service experiences — across every channel — drive measurable improvement in customer satisfaction scores." },
      { title:"Scalable Service Capacity", body:"AI agents scale instantly to handle demand spikes without adding headcount — maintaining service quality during peak periods and product launches." },
    ]}
    ctaHeadline="Ready to Transform Your Service Operation?"
    ctaBody="Talk to Cold Sun Global's Agentforce Service specialists. We'll map your current service operation and design a Salesforce solution that delivers measurable improvement in CSAT, resolution time, and cost per contact."
    ctaLabel="Talk to a Service Cloud Expert →"
    relatedLinks={[{ label:"Agentforce & AI →", href:"/solutions/agentforce" },{ label:"Field Service →", href:"/solutions/field-service" }]}
  />;
}
