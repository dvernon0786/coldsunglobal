import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
export const metadata: Metadata = { title: "Salesforce Solutions" };
const S = { navy:"#04365f", orange:"#f68900", offWhite:"#f8f9fb", white:"#ffffff", grey:"#4a5568", greyLight:"#e8ecf0", font:"'DM Sans',sans-serif", display:"'Playfair Display',serif" };
const offerings = [
  {title:"Agentforce & AI Agents",desc:"Deploy autonomous AI agents that handle service requests, route field technicians, and manage revenue workflows — governed and enterprise-grade.",href:"/solutions/agentforce"},
  {title:"Agentforce Field Service",desc:"Connect dispatch, technicians, inventory, and customer communications in one AI-ready platform. Faster response times, less manual work.",href:"/solutions/field-service"},
  {title:"Revenue Management",desc:"Streamline billing, CPQ, subscriptions, and quoting on Salesforce. Reduce revenue leakage and accelerate cash conversion.",href:"/solutions/revenue-management"},
  {title:"Sales Cloud",desc:"Intelligent pipeline management, guided selling, and AI-powered forecasting on the world's #1 CRM.",href:"/solutions/salesforce"},
  {title:"Service Cloud",desc:"Omnichannel case management, self-service portals, and AI-assisted resolution — driving CSAT and reducing handle times.",href:"/solutions/salesforce"},
  {title:"Data Cloud",desc:"Unify all customer, service, and asset data into a single real-time profile — enabling smarter AI and better automation.",href:"/solutions/salesforce"},
  {title:"Experience Cloud",desc:"Customer and partner portals that deliver self-service, collaboration, and visibility — connected to your Salesforce data.",href:"/solutions/salesforce"},
  {title:"Platform & Custom Dev",desc:"Apex, LWC, and integration solutions when out-of-the-box isn't enough — built for long-term maintainability.",href:"/solutions/salesforce"},
];
export default function SalesforceSolutions() {
  return (<>
    <section style={{background:S.navy,padding:"7rem 1.5rem 5rem"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <p style={{fontFamily:S.font,fontWeight:600,fontSize:12,letterSpacing:"0.12em",textTransform:"uppercase",color:S.orange,marginBottom:16}}>Salesforce Solutions</p>
        <h1 style={{fontFamily:S.display,fontWeight:800,fontSize:"clamp(2.2rem,5vw,4rem)",color:S.white,lineHeight:1.1,marginBottom:24}}>The World&apos;s #1 CRM.<br/><span style={{color:S.orange}}>Implemented Right.</span></h1>
        <p style={{fontFamily:S.font,fontSize:"1.125rem",color:"rgba(255,255,255,0.7)",maxWidth:600,marginBottom:40,lineHeight:1.7}}>Cold Sun Global is a certified Salesforce consulting partner. We design and implement intelligent Salesforce systems that connect data, automate work, and deliver measurable outcomes.</p>
        <Link href="/contact" style={{background:S.orange,color:S.white,padding:"14px 28px",borderRadius:8,fontFamily:S.font,fontWeight:600,fontSize:15,textDecoration:"none",display:"inline-block"}}>Talk to a Salesforce Expert →</Link>
      </div>
    </section>

    <section style={{padding:"5rem 1.5rem",background:S.offWhite}}>
      <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center"}}>
        <div>
          <h2 style={{fontFamily:S.display,fontWeight:700,fontSize:"clamp(1.6rem,3vw,2.2rem)",color:S.navy,marginBottom:8}}>Streamline, Simplify, and Unite Your Business</h2>
          <div style={{width:56,height:4,background:S.orange,borderRadius:2,marginBottom:24}}/>
          <p style={{fontFamily:S.font,color:S.grey,lineHeight:1.7,marginBottom:16}}>Salesforce is the world&apos;s highest-rated CRM platform — and in the right hands, it transforms how your entire organization operates. Cold Sun Global brings deep industry expertise to every Salesforce engagement.</p>
          <p style={{fontFamily:S.font,color:S.grey,lineHeight:1.7}}>From sales and service to revenue, assets, and field operations — we connect your enterprise end-to-end with best-practice configurations that maximize time-to-value and ROI.</p>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {["Scalable end-to-end connection across sales, service, and operations","Configured for rapid time-to-value and measurable ROI","AI-ready architecture that evolves with Salesforce releases","Certified expertise across the full Salesforce product suite","Best-practice designs built from 150+ implementations"].map(item=>(
            <div key={item} style={{display:"flex",alignItems:"flex-start",gap:12,padding:16,borderRadius:12,background:S.white,border:`1px solid ${S.greyLight}`}}>
              <CheckCircle size={17} style={{color:S.orange,flexShrink:0,marginTop:2}}/>
              <span style={{fontFamily:S.font,color:"#374151",fontSize:14}}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{padding:"6rem 1.5rem",background:S.white}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <p style={{fontFamily:S.font,fontWeight:600,fontSize:12,letterSpacing:"0.12em",textTransform:"uppercase",color:S.orange,marginBottom:12}}>Salesforce Services</p>
        <h2 style={{fontFamily:S.display,fontWeight:700,fontSize:"clamp(1.8rem,3vw,2.5rem)",color:S.navy,marginBottom:8}}>Comprehensive Solutions to Drive Success</h2>
        <div style={{width:56,height:4,background:S.orange,borderRadius:2,marginBottom:48}}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>
          {offerings.map(o=>(
            <Link key={o.title} href={o.href} style={{textDecoration:"none",display:"block",padding:32,borderRadius:16,border:`1px solid ${S.greyLight}`,background:S.white}}>
              <h3 style={{fontFamily:S.display,fontWeight:700,fontSize:"1.05rem",color:S.navy,marginBottom:12}}>{o.title}</h3>
              <p style={{fontFamily:S.font,color:S.grey,fontSize:13,lineHeight:1.7,marginBottom:16}}>{o.desc}</p>
              <span style={{fontFamily:S.font,fontWeight:600,fontSize:13,color:S.orange,display:"flex",alignItems:"center",gap:4}}>Learn more <ArrowRight size={13}/></span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section style={{background:S.navy,padding:"5rem 1.5rem",textAlign:"center"}}>
      <div style={{maxWidth:760,margin:"0 auto"}}>
        <h2 style={{fontFamily:S.display,fontWeight:700,fontSize:"clamp(1.8rem,3vw,2.5rem)",color:S.white,marginBottom:16}}>Ready to Get More From Salesforce?</h2>
        <p style={{fontFamily:S.font,color:"rgba(255,255,255,0.7)",fontSize:"1.05rem",marginBottom:32}}>Schedule a complimentary strategy session with Erik. Walk away with a clear implementation roadmap and ROI projection.</p>
        <Link href="/contact" style={{background:S.orange,color:S.white,padding:"14px 32px",borderRadius:8,fontFamily:S.font,fontWeight:600,fontSize:15,textDecoration:"none",display:"inline-block"}}>Schedule a Strategy Session →</Link>
      </div>
    </section>
  </>);
}
