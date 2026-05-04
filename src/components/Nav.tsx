'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ── Nav data ──────────────────────────────────────────────────────────────────

const navItems = [
  {
    label: 'Solutions',
    key: 'solutions',
    groups: [
      {
        heading: 'Salesforce',
        items: [
          { label: 'Salesforce Overview', href: '/solutions/salesforce' },
          { label: 'Agentforce & AI', href: '/solutions/agentforce' },
          { label: 'Field Service', href: '/solutions/field-service' },
          { label: 'Revenue Management', href: '/solutions/revenue-management' },
        ],
      },
      {
        heading: 'ERP & Platforms',
        items: [
          { label: 'NetSuite ERP', href: '/solutions/erp' },
          { label: 'IFS Cloud', href: '/solutions/erp#ifs' },
          { label: 'ServiceNow', href: '/solutions/servicenow' },
          { label: 'Sage Intacct', href: '/solutions/erp#sage' },
        ],
      },
    ],
  },
  {
    label: 'Industries',
    key: 'industries',
    groups: [
      {
        heading: '',
        items: [
          { label: 'Education', href: '/industries/education' },
          { label: 'Energy & Oil & Gas', href: '/industries/energy' },
          { label: 'Healthcare & Life Sciences', href: '/industries/healthcare' },
          { label: 'High Technology & IT', href: '/industries/high-tech' },
          { label: 'Home & Business Services', href: '/industries/home-services' },
          { label: 'Manufacturing', href: '/industries/manufacturing' },
          { label: 'Nonprofit', href: '/industries/nonprofit' },
          { label: 'Professional Services', href: '/industries/professional-services' },
          { label: 'Telecommunications', href: '/industries/telecom' },
          { label: 'Utilities', href: '/industries/utilities' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    key: 'services',
    groups: [
      {
        heading: '',
        items: [
          { label: 'Consulting', href: '/services/consulting' },
          { label: 'Implementation & Integration', href: '/services/implementation' },
          { label: 'Managed & Advisory Services', href: '/services/managed-services' },
          { label: 'Change Management', href: '/services/change-management' },
          { label: 'Migration Services', href: '/services/migration' },
          { label: 'Talent Management', href: '/services/talent-management' },
          { label: 'Training', href: '/services/training' },
        ],
      },
    ],
  },
  {
    label: 'Clients',
    key: 'clients',
    groups: [
      {
        heading: '',
        items: [
          { label: 'Our Clients', href: '/clients' },
          { label: 'Success Stories', href: '/clients#stories' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    key: 'resources',
    groups: [
      {
        heading: '',
        items: [
          { label: 'Blog & Insights', href: '/resources' },
          { label: 'Ebooks & Guides', href: '/resources#ebooks' },
          { label: 'Webinars', href: '/resources#webinars' },
          { label: 'Podcast', href: '/podcast' },
        ],
      },
    ],
  },
  {
    label: 'About',
    key: 'about',
    groups: [
      {
        heading: '',
        items: [
          { label: 'Who We Are', href: '/about' },
          { label: 'Leadership', href: '/leadership' },
          { label: 'Careers', href: '/about#careers' },
          { label: 'Our Group', href: '/about#group' },
        ],
      },
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Nav() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Desktop mega-menu
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Mobile drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Runs only on client — safe to call setState here (mount detection pattern)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // ── Body scroll lock ──
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [mobileOpen]);

  // ── Close drawer on Escape ──
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeMenu) { setActiveMenu(null); }
        else if (mobileOpen) { setMobileOpen(false); hamburgerRef.current?.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [activeMenu, mobileOpen]);

  // ── Focus trap in mobile drawer ──
  useEffect(() => {
    if (!mobileOpen || !drawerRef.current) return;
    const el = drawerRef.current;
    const focusable = el.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();
    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last?.focus(); } }
      else { if (document.activeElement === last) { e.preventDefault(); first?.focus(); } }
    };
    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [mobileOpen]);

  // ── Click outside mega-menu ──
  useEffect(() => {
    if (!activeMenu) return;
    const handler = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (megaMenuRef.current?.contains(t)) return;
      if (t.closest('[data-nav-trigger]')) return;
      setActiveMenu(null);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [activeMenu]);

  // ── Click outside mobile drawer ──
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (drawerRef.current?.contains(t)) return;
      if (hamburgerRef.current?.contains(t)) return;
      setMobileOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  // ── Delayed close helpers ──
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 175);
  };
  const cancelClose = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  };

  const openMenu = (key: string) => { cancelClose(); setActiveMenu(key); };

  const toggleMenu = (key: string) => {
    cancelClose();
    setActiveMenu(prev => (prev === key ? null : key));
  };

  const closeMobile = () => { setMobileOpen(false); setMobileExpanded(null); };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-[1280px] mx-auto px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#f68900] focus:ring-offset-2 rounded"
            aria-label="Cold Sun Global — Home"
            onClick={() => setActiveMenu(null)}
          >
            <img
              src="/coldsunglobal_logo.svg"
              alt="Cold Sun Global"
              style={{ height: 44, width: 'auto', display: 'block' }}
            />
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => {
              const isActive = mounted && (pathname === `/${item.key}` || pathname?.startsWith(`/${item.key}/`));
              const isOpen = activeMenu === item.key;
              return (
                <div key={item.key} className="relative">
                  <button
                    data-nav-trigger={item.key}
                    onClick={() => toggleMenu(item.key)}
                    onMouseEnter={() => openMenu(item.key)}
                    onMouseLeave={scheduleClose}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[14px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#0061af] focus:ring-offset-2 min-h-[44px] ${
                      isActive || isOpen
                        ? 'text-[#04365f] border-b-2 border-[#f68900]'
                        : 'text-gray-600 hover:text-[#04365f] hover:bg-gray-50'
                    }`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-200"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>

          {/* ── Desktop CTA ── */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-[14px] font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#f68900] focus:ring-offset-2 transition-colors min-h-[44px]"
            style={{ backgroundColor: '#f68900' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d57700')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f68900')}
          >
            Contact Us
          </Link>

          {/* ── Mobile hamburger ── */}
          <button
            ref={hamburgerRef}
            type="button"
            onClick={() => { setMobileOpen(o => !o); if (mobileOpen) setMobileExpanded(null); }}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-[#04365f] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#f68900] focus:ring-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Desktop Dropdown Panels ── */}
      <div ref={megaMenuRef}>
        {navItems.map(item => {
          const isOpen = activeMenu === item.key;
          return (
            <div
              key={item.key}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                zIndex: 40,
                display: isOpen ? 'block' : 'none',
              }}
            >
              <div style={{ background: '#fff', borderBottom: '1px solid #e8ecf0', boxShadow: '0 16px 48px rgba(4,54,95,0.12)' }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '28px 24px 32px' }}>
                  {/* Panel header */}
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f68900', marginBottom: 16 }}>
                    {item.label}
                  </p>
                  <div style={{ display: 'flex', gap: 48 }}>
                    {item.groups.map((group, gi) => (
                      <div key={gi} style={{ flex: 1 }}>
                        {group.heading && (
                          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0061af', marginBottom: 10 }}>
                            {group.heading}
                          </p>
                        )}
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: group.items.length > 5 ? '1fr 1fr' : '1fr',
                          gap: '2px 24px',
                        }}>
                          {group.items.map(link => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setActiveMenu(null)}
                              style={{
                                display: 'block',
                                padding: '7px 10px',
                                fontSize: 14,
                                color: '#374151',
                                textDecoration: 'none',
                                borderRadius: 6,
                                whiteSpace: 'nowrap',
                                transition: 'background 0.15s, color 0.15s',
                              }}
                              onMouseEnter={e => { e.currentTarget.style.background = '#f0f6fc'; e.currentTarget.style.color = '#04365f'; }}
                              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151'; }}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Mobile Overlay ── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col"
        style={{
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link href="/" onClick={closeMobile}>
            <img src="/coldsunglobal_logo.svg" alt="Cold Sun Global" style={{ height: 36, width: 'auto' }} />
          </Link>
          <button
            onClick={closeMobile}
            className="p-2 rounded-lg text-gray-500 hover:text-[#04365f] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f68900] min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1" aria-label="Mobile navigation">
          {navItems.map(item => {
            const isExpanded = mobileExpanded === item.key;
            const isActive = mounted && (pathname === `/${item.key}` || pathname?.startsWith(`/${item.key}/`));
            return (
              <div key={item.key} className="rounded-xl overflow-hidden border border-gray-100">
                <button
                  onClick={() => setMobileExpanded(isExpanded ? null : item.key)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-[15px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#f68900] focus:ring-offset-2 min-h-[48px] ${
                    isActive ? 'text-[#04365f] bg-[#f0f6fc]' : 'text-gray-700 hover:text-[#04365f] hover:bg-gray-50'
                  }`}
                  aria-expanded={isExpanded}
                >
                  <span>{item.label}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200"
                    style={{ transform: isExpanded ? 'rotate(180deg)' : 'none' }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isExpanded && (
                  <div className="bg-gray-50 px-4 pt-2 pb-3 space-y-0.5">
                    {item.groups.map((group, gi) => (
                      <div key={gi}>
                        {group.heading && (
                          <p className="text-[11px] font-bold uppercase tracking-widest mt-3 mb-1.5 px-2" style={{ color: '#f68900' }}>
                            {group.heading}
                          </p>
                        )}
                        {group.items.map(link => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMobile}
                            className="block px-2 py-2 text-[14px] text-gray-600 hover:text-[#04365f] rounded-lg hover:bg-white transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Drawer footer CTA */}
        <div className="px-4 py-4 border-t border-gray-100">
          <Link
            href="/contact"
            onClick={closeMobile}
            className="flex items-center justify-center w-full py-3.5 rounded-xl text-white font-semibold text-[15px] focus:outline-none focus:ring-2 focus:ring-[#f68900] focus:ring-offset-2 transition-colors"
            style={{ backgroundColor: '#f68900' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d57700')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f68900')}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
