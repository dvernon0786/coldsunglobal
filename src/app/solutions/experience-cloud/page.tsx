import { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";
export const metadata: Metadata = { title: "Salesforce Experience Cloud" };
export default function ExperienceCloud() {
  return <SolutionPage
    label="Salesforce Experience Cloud"
    headline="Self-Service Portals That"
    accent="Actually Serve Customers."
    subheadline="Cold Sun Global builds Salesforce Experience Cloud portals that give your customers, partners, and field technicians real-time access to the information and services they need — reducing inbound contact volume and improving satisfaction."
    whyTitle="Your Customers Shouldn't Have to Call to Get Answers"
    whyBody="Every inbound call or email that could have been resolved through self-service is a cost to your operation and a friction point for your customer. Salesforce Experience Cloud gives you a branded, intelligent self-service layer — connected to your Salesforce CRM, Field Service, and Service Cloud data — so customers can check case status, schedule service, track technicians, and access knowledge without waiting for an agent."
    whyPoints={[
      "Branded self-service portals connected to live Salesforce data",
      "Customer case management, tracking, and service request submission",
      "Technician tracking and appointment management for field service",
      "Partner portals for channel and dealer management",
      "AI-powered search and knowledge base recommendations",
    ]}
    cards={[
      { title:"Customer Self-Service Portal", body:"Branded portals where customers can submit service requests, track case status, view technician ETAs, access invoices, and manage their account — without calling your contact center." },
      { title:"Field Service Customer Portal", body:"Real-time technician tracking, appointment scheduling and rescheduling, pre-visit asset information collection, and post-visit survey automation — all in a mobile-optimized customer portal." },
      { title:"Partner & Dealer Portal", body:"Channel partner portals with deal registration, joint pipeline visibility, MDF management, partner enablement content, and co-selling tools — all connected to your Salesforce CRM." },
      { title:"Knowledge Base & AI Search", body:"Self-service knowledge base with AI-powered search and article recommendations — surfacing the right resolution content to customers and deflecting cases before they reach your team." },
      { title:"Community & Collaboration", body:"Community portals that connect customers with peer experts, product communities, and your internal team — building engagement and reducing support burden through peer-to-peer resolution." },
      { title:"Mobile-Optimized Experience", body:"Experience Cloud portals built mobile-first — with responsive design, push notifications, and offline capability for field technicians and mobile-first customer bases." },
    ]}
    stepsTitle="How We Build Your Experience Cloud Portal"
    steps={[
      { title:"Experience Strategy & Discovery", body:"We define your portal's scope, audience, key use cases, and success metrics — mapping the customer and partner journeys that the portal needs to support." },
      { title:"Design & Architecture", body:"We design your portal's information architecture, user experience, and Salesforce data connections — with branded visual design aligned to your corporate identity." },
      { title:"Build, Test & Launch", body:"Agile build cycles with structured UAT, performance testing, and a phased launch — followed by hypercare support and adoption measurement to ensure the portal delivers value from day one." },
    ]}
    benefitsTitle="What Experience Cloud Delivers"
    benefits={[
      { title:"Reduced Inbound Contact Volume", body:"Self-service case tracking, knowledge base deflection, and appointment management significantly reduce the volume of inbound calls and emails — lowering cost per service interaction." },
      { title:"Higher Customer Satisfaction", body:"Customers who can get answers and manage their service on their own schedule — without waiting on hold — consistently report higher satisfaction and loyalty." },
      { title:"Stronger Partner Performance", body:"Partners with real-time deal visibility, co-selling tools, and easy access to enablement content close more business and engage more deeply with your program." },
      { title:"Scalable Service Capacity", body:"Self-service capability that scales with your customer base without requiring proportional growth in your service team headcount." },
    ]}
    ctaHeadline="Build a Portal Your Customers Will Actually Use"
    ctaBody="Talk to Cold Sun Global's Experience Cloud specialists. We'll design a self-service experience that reduces your contact volume, improves CSAT, and strengthens your customer and partner relationships."
    ctaLabel="Talk to an Experience Cloud Expert →"
    relatedLinks={[{ label:"Agentforce Service →", href:"/solutions/agentforce-service" },{ label:"Field Service →", href:"/solutions/field-service" }]}
  />;
}
