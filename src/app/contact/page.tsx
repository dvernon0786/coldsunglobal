import { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us" };

export default function Contact() {
  return (
    <>
      <section className="hero-grid py-28 px-6" style={{background:"var(--navy)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{color:"var(--orange)"}}>Get in Touch</p>
          <h1 className="text-4xl md:text-6xl text-white mb-6" style={{fontFamily:"'Playfair Display',serif",fontWeight:800}}>
            Let&apos;s Talk About<br/><span style={{color:"var(--orange)"}}>Your Transformation.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl" style={{fontFamily:"'DM Sans',sans-serif"}}>
            Whether you&apos;re planning a migration, evaluating platforms, or ready to start — reach out. Erik personally responds to every inquiry.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <p className="section-label mb-3">Send a Message</p>
            <h2 className="text-3xl mb-8 accent-line" style={{color:"var(--navy)"}}>Start the Conversation</h2>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                {["First Name","Last Name"].map(f => (
                  <div key={f}>
                    <label className="block text-sm font-semibold mb-1.5 text-gray-700" style={{fontFamily:"'DM Sans',sans-serif"}}>{f}</label>
                    <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors" style={{fontFamily:"'DM Sans',sans-serif"}} />
                  </div>
                ))}
              </div>
              {[{l:"Work Email",t:"email"},{l:"Company",t:"text"},{l:"Phone (optional)",t:"tel"}].map(f => (
                <div key={f.l}>
                  <label className="block text-sm font-semibold mb-1.5 text-gray-700" style={{fontFamily:"'DM Sans',sans-serif"}}>{f.l}</label>
                  <input type={f.t} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors" style={{fontFamily:"'DM Sans',sans-serif"}} />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-gray-700" style={{fontFamily:"'DM Sans',sans-serif"}}>What are you looking to achieve?</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors" style={{fontFamily:"'DM Sans',sans-serif"}}>
                  <option>Salesforce Implementation</option>
                  <option>NetSuite / ERP Transformation</option>
                  <option>ServiceNow Deployment</option>
                  <option>Field Service Migration</option>
                  <option>Managed Services</option>
                  <option>Strategy Session with Erik</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-gray-700" style={{fontFamily:"'DM Sans',sans-serif"}}>Tell us more</label>
                <textarea rows={5} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors resize-none" style={{fontFamily:"'DM Sans',sans-serif"}} placeholder="Describe your current situation and what you&apos;re hoping to achieve..." />
              </div>
              <button type="submit" className="btn-primary w-full text-center">Send Message →</button>
            </form>
          </div>

          {/* Info */}
          <div>
            <p className="section-label mb-3">Strategy Sessions</p>
            <h2 className="text-3xl mb-6" style={{color:"var(--navy)"}}>Prefer to Talk First?</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg" style={{fontFamily:"'DM Sans',sans-serif"}}>
              Erik personally leads every initial strategy session. Book a complimentary 45-minute call and walk away with a concrete roadmap — no obligation.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "✓ ClickSoftware/ServiceMax migration roadmap",
                "✓ ROI projection for your specific context",
                "✓ 12–16 week implementation timeline assessment",
                "✓ Platform fit analysis (Salesforce vs NetSuite vs IFS)",
                "✓ No sales pressure — Erik leads every call personally",
              ].map(i => (
                <p key={i} className="text-gray-700 text-sm" style={{fontFamily:"'DM Sans',sans-serif"}}>{i}</p>
              ))}
            </div>

            <div className="p-6 rounded-xl border border-gray-100 bg-gray-50 mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-1" style={{fontFamily:"'DM Sans',sans-serif"}}>Email Us</p>
              <p className="text-orange-500 font-semibold" style={{fontFamily:"'DM Sans',sans-serif"}}>info@coldsunglobal.com</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {r:"North America",d:"US & Canada"},
                {r:"United Kingdom",d:"London & Remote"},
                {r:"Netherlands",d:"EU Headquarters"},
                {r:"India",d:"Delivery Hub"},
              ].map(o => (
                <div key={o.r} className="p-4 rounded-lg border border-gray-100 bg-white">
                  <p className="font-semibold text-sm" style={{color:"var(--navy)",fontFamily:"'DM Sans',sans-serif"}}>{o.r}</p>
                  <p className="text-xs text-gray-400 mt-0.5" style={{fontFamily:"'DM Sans',sans-serif"}}>{o.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
