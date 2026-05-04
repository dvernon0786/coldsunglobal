"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

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
  { label:"Resources", children:[{group:"",items:[{label:"Blog & Insights",href:"/resources"},{label:"Ebooks & Guides",href:"/resources#ebooks"},{label:"Webinars",href:"/resources#webinars"},{label:"Podcast",href:"/podcast"}]}]},
  { label:"About", children:[{group:"",items:[{label:"Who We Are",href:"/about"},{label:"Leadership",href:"/leadership"},{label:"Careers",href:"/about#careers"},{label:"Our Group",href:"/about#group"}]}]},
];

export default function Nav() {
  const [open, setOpen] = useState<string|null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string|null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100" style={{ boxShadow: "0 1px 8px rgba(4,54,95,0.06)" }}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <img src="/coldsunglobal_logo.png" alt="Cold Sun Global" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="flex items-center gap-1 nav-desktop-menu">
          {nav.map(item => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-[#04365f] hover:bg-gray-50 transition-colors border-none bg-transparent cursor-pointer">
                {item.label}
                <ChevronDown
                  size={13}
                  className="transition-transform duration-200"
                  style={{ transform: open === item.label ? "rotate(180deg)" : "none" }}
                />
              </button>

              {open === item.label && (
                <div
                  className="absolute top-full left-0 bg-white border border-gray-100 rounded-xl z-50 p-4 flex gap-6"
                  style={{
                    boxShadow: "0 16px 40px rgba(4,54,95,0.10)",
                    minWidth: item.children.length > 1 ? 440 : 200,
                  }}
                >
                  {item.children.map(group => (
                    <div key={group.group} className="flex-1">
                      {group.group && (
                        <p className="text-[11px] font-semibold uppercase tracking-widest mb-2 pl-2" style={{ color: "#f68900" }}>
                          {group.group}
                        </p>
                      )}
                      {group.items.map(i => (
                        <Link
                          key={i.href}
                          href={i.href}
                          onClick={() => setOpen(null)}
                          className="block px-2 py-1.5 text-[13px] text-gray-600 hover:text-[#04365f] hover:bg-[#f0f6fc] rounded-md whitespace-nowrap transition-colors"
                        >
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

        {/* CTA button */}
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#f68900] focus:ring-offset-2"
          style={{ backgroundColor: "#f68900" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d57700")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f68900")}
        >
          Contact Us
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobile(!mobile)}
          className="mobile-hamburger hidden bg-transparent border-none cursor-pointer p-1 text-gray-600"
          aria-label="Toggle mobile menu"
        >
          {mobile ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobile && (
        <div className="bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          {nav.map(item => (
            <div key={item.label}>
              <button
                onClick={() => setMobileOpen(mobileOpen === item.label ? null : item.label)}
                className="w-full flex items-center justify-between px-6 py-4 bg-transparent border-none border-b border-gray-100 cursor-pointer text-sm font-semibold text-gray-700"
              >
                {item.label}
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200"
                  style={{ transform: mobileOpen === item.label ? "rotate(180deg)" : "none" }}
                />
              </button>
              {mobileOpen === item.label && (
                <div className="bg-gray-50 px-6 pt-2 pb-4">
                  {item.children.flatMap(g => g.items).map(i => (
                    <Link
                      key={i.href}
                      href={i.href}
                      onClick={() => setMobile(false)}
                      className="block py-2 text-sm text-gray-600 hover:text-[#04365f] transition-colors"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-4">
            <Link
              href="/contact"
              onClick={() => setMobile(false)}
              className="block text-center text-white font-semibold text-sm py-3 px-6 rounded-lg"
              style={{ backgroundColor: "#f68900" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop-menu { display: none !important; }
          .mobile-hamburger { display: block !important; }
          header > div > a[href="/contact"].sm\\:inline-flex { display: none !important; }
        }
      `}</style>
    </header>
  );
}
