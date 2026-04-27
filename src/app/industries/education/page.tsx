import { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Education" };
export default function Page() {
  return <InnerPage
    label="Education"
    headline="Modernize the"
    headlineAccent="Student Experience."
    subheadline="Cold Sun Global delivers Salesforce Education Cloud and ERP solutions for higher education institutions — improving student recruitment, engagement, retention, and institutional operations."
    intro="Higher education institutions are under unprecedented pressure — declining enrollment, increased competition, and rising expectations from students, faculty, and donors. Cold Sun Global helps colleges and universities modernize their technology infrastructure with Salesforce Education Cloud, supporting institutions including Brescia, Humber, Toronto Metropolitan University, and the University of Toronto."
    sections={[
      {title:"Salesforce Education Cloud",body:"Unified student lifecycle management — from prospective student recruitment through enrollment, advising, success management, and alumni engagement."},
      {title:"Student Success & Retention",body:"Early alert and student success programs on Salesforce — connecting advising, academic support, and student services to improve retention and completion rates."},
      {title:"Institutional Operations",body:"NetSuite and Sage Intacct for higher education financial management — fund accounting, grant management, and multi-campus financial consolidation."},
      {title:"Implementation & Integration",body:"End-to-end platform implementation with integrations to your existing billing, asset, and operational systems."},
      {title:"Managed & Advisory Services",body:"Ongoing platform support and strategic advisory to ensure your systems continue to deliver value as your business evolves."},
      {title:"Change Management & Training",body:"Structured adoption programs that ensure your teams embrace and effectively use the platforms we implement."},
    ]}
    ctaHeadline="Ready to Transform Your Education Operations?"
    ctaBody="Talk to Cold Sun Global's Education specialists. We'll map your current challenges and design a platform strategy that delivers measurable outcomes."
    ctaLabel="Talk to an Industry Expert →"
  />;
}
