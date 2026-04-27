import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Managed & Advisory Services" };
export default function ManagedServices() {
  return <InnerPage
    label="Managed & Advisory Services"
    headline="Continuous Support."
    headlineAccent="Strategic Partnership."
    subheadline="Cold Sun Global provides ongoing managed services and strategic advisory — keeping your Salesforce, ERP, and enterprise platforms healthy, optimized, and aligned to your evolving business."
    intro="After go-live, the real work begins. Cold Sun Global's managed services team provides ongoing technical support, platform administration, release management, and strategic advisory — so your platforms continue to deliver value long after the initial implementation. Our advisory clients get access to senior architects and consultants who know their environment."
    sections={[
      {title:"Platform Administration",body:"Day-to-day administration of your Salesforce, NetSuite, or ServiceNow environment — user management, configuration changes, and system health monitoring."},
      {title:"Release Management",body:"Structured management of Salesforce seasonal releases and platform upgrades — impact assessment, sandbox testing, and controlled production deployment."},
      {title:"Technical Support",body:"Tiered support model with defined SLAs. Break-fix resolution, root cause analysis, and proactive monitoring to catch issues before users do."},
      {title:"Strategic Advisory",body:"Ongoing access to senior architects who understand your environment — for roadmap planning, platform decisions, and executive-level guidance."},
      {title:"Optimization Reviews",body:"Quarterly reviews of your platform performance, adoption, and alignment to business goals — with actionable recommendations."},
      {title:"Enhancement Development",body:"Ongoing enhancement and new feature development within your managed services engagement — planned, prioritized, and delivered continuously."},
    ]}
    ctaHeadline="Looking for a Long-Term Platform Partner?"
    ctaBody="Cold Sun Global builds managed service relationships built on transparency, expertise, and mutual accountability. Let's talk about what ongoing support looks like for your environment."
    ctaLabel="Discuss Managed Services →"
  />;
}
