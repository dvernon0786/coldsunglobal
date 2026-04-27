"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const S = { navy:"#04365f", orange:"#f68900", white:"#ffffff", font:"'DM Sans',sans-serif", display:"'Playfair Display',serif" };

const nav = [
  { label:"Solutions", children:[
    { group:"Salesforce", items:[
      {label:"Salesforce Overview",href:"/solutions/salesforce"},
      {label:"Agentforce & AI",href:"/solutions/agentforce"},
      {label:"Field Service",href:"/solutions/field-service"},
      {label:"Revenue Management",href:"/solutions/revenue-management"},
    ]},
    { group:"ERP & Platforms", items:[
      {label:"NetSuite ERP",href:"/solutions/erp"},
      {label:"IFS Cloud",href:"/solutions/erp#ifs"},
      {label:"ServiceNow",href:"/solutions/servicenow"},
      {label:"Sage Intacct",href:"/solutions/erp#sage"},
    ]},
  ]},
  { label:"Industries", children:[
    { group:"", items:[
      {label:"Education",href:"/industries/education"},
      {label:"Energy & Oil & Gas",href:"/industries/energy"},
      {label:"Healthcare & Life Sciences",href:"/industries/healthcare"},
      {label:"High Technology & IT",href:"/industries/high-tech"},
      {label:"Home & Business Services",href:"/industries/home-services"},
      {label:"Manufacturing",href:"/industries/manufacturing"},
      {label:"Nonprofit",href:"/industries/nonprofit"},
      {label:"Professional Services",href:"/industries/professional-services"},
      {label:"Telecommunications",href:"/industries/telecom"},
      {label:"Utilities",href:"/industries/utilities"},
    ]},
  ]},
  { label:"Services", children:[
    { group:"", items:[
      {label:"Consulting",href:"/services/consulting"},
      {label:"Implementation & Integration",href:"/services/implementation"},
      {label:"Managed & Advisory Services",href:"/services/managed-services"},
      {label:"Change Management",href:"/services/change-management"},
      {label:"Migration Services",href:"/services/migration"},
      {label:"Talent Management",href:"/services/talent-management"},
      {label:"Training",href:"/services/training"},
    ]},
  ]},
  { label:"Clients", children:[{group:"",items:[{label:"Our Clients",href:"/clients"},{label:"Success Stories",href:"/clients#stories"}]}]},
  { label:"Resources", children:[{group:"",items:[{label:"Blog & Insights",href:"/resources"},{label:"Ebooks & Guides",href:"/resources#ebooks"},{label:"Webinars",href:"/resources#webinars"}]}]},
  { label:"About", children:[{group:"",items:[{label:"Who We Are",href:"/about"},{label:"Leadership",href:"/leadership"},{label:"Careers",href:"/about#careers"},{label:"Our Group",href:"/about#group"}]}]},
];

export default function Nav() {
  const [open, setOpen] = useState<string|null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string|null>(null);

  return (
    <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:S.white, borderBottom:"1px solid #e5e7eb", boxShadow:"0 1px 8px rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 1.5rem", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:0, flexShrink:0 }}>
          <img src="/coldsunglobal_logo.png" alt="Cold Sun Global" style={{ height:48, width:"auto" }} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display:"flex", alignItems:"center", gap:4 }}>
          {nav.map(item => (
            <div key={item.label} style={{ position:"relative" }}
              onMouseEnter={() => setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}>
              <button style={{ display:"flex", alignItems:"center", gap:4, padding:"8px 12px", background:"none", border:"none", cursor:"pointer", fontFamily:S.font, fontWeight:500, fontSize:14, color:"#374151" }}>
                {item.label}
                <ChevronDown size={13} style={{ transition:"transform 0.2s", transform: open===item.label ? "rotate(180deg)" : "none" }} />
              </button>
              {open===item.label && (
                <div style={{ position:"absolute", top:"100%", left:0, background:S.white, border:"1px solid #e5e7eb", borderRadius:12, boxShadow:"0 16px 40px rgba(0,0,0,0.12)", zIndex:100, padding:16, display:"flex", gap:24, minWidth: item.children.length>1 ? 440 : 200 }}>
                  {item.children.map(group => (
                    <div key={group.group} style={{ flex:1 }}>
                      {group.group && <p style={{ fontFamily:S.font, fontSize:11, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em", color:S.orange, marginBottom:8, paddingLeft:8 }}>{group.group}</p>}
                      {group.items.map(i => (
                        <Link key={i.href} href={i.href} onClick={()=>setOpen(null)}
                          style={{ display:"block", padding:"7px 8px", fontSize:13, fontFamily:S.font, color:"#374151", textDecoration:"none", borderRadius:6, whiteSpace:"nowrap" }}>
                          {i.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link href="/contact" style={{ background:S.orange, color:S.white, padding:"10px 22px", borderRadius:8, fontFamily:S.font, fontWeight:600, fontSize:14, textDecoration:"none" }}>
          Contact Us
        </Link>

        {/* Mobile hamburger */}
        <button onClick={()=>setMobile(!mobile)} style={{ display:"none", background:"none", border:"none", cursor:"pointer", padding:4 }}
          className="mobile-hamburger">
          {mobile ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {mobile && (
        <div style={{ background:S.white, borderTop:"1px solid #e5e7eb", maxHeight:"80vh", overflowY:"auto" }}>
          {nav.map(item => (
            <div key={item.label}>
              <button onClick={()=>setMobileOpen(mobileOpen===item.label?null:item.label)}
                style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 24px", background:"none", border:"none", borderBottom:"1px solid #f3f4f6", cursor:"pointer", fontFamily:S.font, fontWeight:600, fontSize:14, color:"#374151" }}>
                {item.label}
                <ChevronDown size={16} style={{ transform: mobileOpen===item.label?"rotate(180deg)":"none", transition:"transform 0.2s" }} />
              </button>
              {mobileOpen===item.label && (
                <div style={{ background:"#f9fafb", padding:"8px 24px 16px" }}>
                  {item.children.flatMap(g=>g.items).map(i => (
                    <Link key={i.href} href={i.href} onClick={()=>setMobile(false)}
                      style={{ display:"block", padding:"8px 0", fontSize:14, fontFamily:S.font, color:"#374151", textDecoration:"none" }}>
                      {i.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ padding:16 }}>
            <Link href="/contact" onClick={()=>setMobile(false)}
              style={{ display:"block", textAlign:"center", background:S.orange, color:S.white, padding:"12px 24px", borderRadius:8, fontFamily:S.font, fontWeight:600, textDecoration:"none" }}>
              Contact Us
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media(max-width:900px){
          nav { display:none!important; }
          .mobile-hamburger { display:block!important; }
          header > div > a[href="/contact"] ~ a { display:none; }
        }
      `}</style>
    </header>
  );
}
