"use client";

import Link from "next/link";

export default function BeAGuestCTA() {
  return (
    <section style={{ padding: "72px 24px", background: "var(--navy)" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <p style={{
          fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
          color: "var(--orange)", fontWeight: 600, marginBottom: 16,
        }}>
          Be a Guest
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
          fontWeight: 800, color: "#fff",
          margin: "0 0 20px", lineHeight: 1.2,
        }}>
          Want to be featured on<br />The Cold Sun Podcast?
        </h2>
        <p style={{
          fontSize: "1rem", color: "rgba(255,255,255,0.65)",
          lineHeight: 1.75, maxWidth: 520, margin: "0 auto 36px",
        }}>
          With discussions focused on real-world implementation experience across field service, ERP, and AI, we always welcome new voices. If you're a practitioner with a genuine story to tell, get in touch.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "var(--orange)", color: "#fff",
              padding: "14px 32px", borderRadius: 8,
              fontWeight: 700, fontSize: 15,
              textDecoration: "none",
              cursor: "pointer",
              transition: "opacity 0.15s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Get In Touch →
          </Link>
          <a
            href="https://www.linkedin.com/company/cold-sun-global"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "transparent", color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "14px 32px", borderRadius: 8,
              fontWeight: 600, fontSize: 15,
              textDecoration: "none",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.5)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
            }}
          >
            Message on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
