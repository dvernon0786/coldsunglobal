import { Metadata } from "next";
import Link from "next/link";
import PodcastHero from "./podcast-hero";
import EpisodeCards from "./episode-cards";
import BeAGuestCTA from "./be-a-guest-cta";

export const metadata: Metadata = { title: "The Cold Sun Podcast" };

const episodes = [
  {
    num: 1,
    title: "Why Most Field Service Transformations Stall Before Year One",
    desc: "The hard truth about why enterprise FSM projects lose momentum — budget drift, stakeholder misalignment, and the one governance gap that kills deployments before go-live.",
    date: "April 2026",
    duration: "18 min",
    bgColor: "linear-gradient(135deg, #04365f 0%, #0a4a7a 100%)",
    badge: "Field Service",
    href: "https://open.spotify.com/show/2txP3cOET42fPiu8ILj0U4",
  },
  {
    num: 2,
    title: "Agentforce in the Field: Real Deployments, Real Lessons",
    desc: "What actually happens when you put autonomous AI agents in a field service environment. Three real deployment patterns — and what we'd do differently on each.",
    date: "March 2026",
    duration: "22 min",
    bgColor: "linear-gradient(135deg, #f68900 0%, #ffa733 100%)",
    badge: "AI & Agentforce",
    href: "https://open.spotify.com/show/2txP3cOET42fPiu8ILj0U4",
  },
  {
    num: 3,
    title: "NetSuite vs IFS Cloud: Making the Right ERP Call",
    desc: "A platform-agnostic comparison for asset-intensive businesses. When NetSuite wins, when IFS wins, and the deal-breaker criteria most ERP evaluations miss entirely.",
    date: "March 2026",
    duration: "25 min",
    bgColor: "linear-gradient(135deg, #0a4a7a 0%, #04365f 100%)",
    badge: "ERP & Finance",
    href: "https://open.spotify.com/show/2txP3cOET42fPiu8ILj0U4",
  },
  {
    num: 4,
    title: "Change Management Is Not an Afterthought — It's the Strategy",
    desc: "Why the companies that treat change management as a checkbox fail at adoption. The four levers that actually move people, and how to wire them into your implementation plan from day one.",
    date: "February 2026",
    duration: "20 min",
    bgColor: "linear-gradient(135deg, #f68900 0%, #04365f 100%)",
    badge: "Change & Adoption",
    href: "https://open.spotify.com/show/2txP3cOET42fPiu8ILj0U4",
  },
  {
    num: 5,
    title: "The Hidden Cost of a Bad ClickSoftware Migration",
    desc: "Beyond licensing fees and project hours — the real costs that surface 6–18 months post-migration when the architecture was wrong from the start.",
    date: "February 2026",
    duration: "19 min",
    bgColor: "linear-gradient(135deg, #04365f 0%, #f68900 100%)",
    badge: "Field Service",
    href: "https://open.spotify.com/show/2txP3cOET42fPiu8ILj0U4",
  },
  {
    num: 6,
    title: "Revenue Recognition Post-ASC 606: What Your CRM Must Do",
    desc: "ASC 606 changed revenue recognition permanently. What it means for your quoting, billing, and CRM workflows — and why most Salesforce implementations still aren't compliant.",
    date: "January 2026",
    duration: "16 min",
    bgColor: "linear-gradient(135deg, #0a4a7a 0%, #ffa733 100%)",
    badge: "ERP & Finance",
    href: "https://open.spotify.com/show/2txP3cOET42fPiu8ILj0U4",
  },
];

const SPOTIFY_SHOW_ID = "2txP3cOET42fPiu8ILj0U4";

export default function Podcast() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <PodcastHero spotifyShowId={SPOTIFY_SHOW_ID} />

      {/* ── SPOTIFY EMBED ────────────────────────────────────────────────── */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{
            fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
            color: "var(--orange)", fontWeight: 600, marginBottom: 12,
          }}>
            Stream the Show
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            color: "var(--navy)", fontWeight: 700, margin: "0 0 10px",
          }}>
            Listen Now
          </h2>
          <div style={{
            width: 52, height: 4, background: "var(--orange)",
            borderRadius: 2, marginBottom: 40,
          }} />

          {/* The embed — height 352 shows the full show player with episode list */}
          <div style={{
            borderRadius: 16, overflow: "hidden",
            border: "1px solid #e4e8ed",
            boxShadow: "0 4px 24px rgba(4,54,95,0.08)",
          }}>
            <iframe
              src={`https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              style={{ border: "none", display: "block" }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="The Cold Sun Podcast on Spotify"
            />
          </div>

          <p style={{
            fontSize: 13, color: "#8a95a0", marginTop: 14, textAlign: "center",
          }}>
            Can't see the player?{" "}
            <a
              href={`https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--orange)", fontWeight: 600, textDecoration: "none" }}
            >
              Open directly on Spotify →
            </a>
          </p>
        </div>
      </section>

      <EpisodeCards episodes={episodes} spotifyShowId={SPOTIFY_SHOW_ID} />

      {/* ── HOST + ABOUT ─────────────────────────────────────────────────── */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 64, alignItems: "center",
        }}>
          {/* Host card — mirrors FoFS host block */}
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: 120, height: 120, borderRadius: "50%",
              background: "linear-gradient(135deg, var(--navy) 0%, #0a4a7a 100%)",
              margin: "0 auto 20px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 40, fontWeight: 800, color: "var(--orange)",
              fontFamily: "'Playfair Display', serif",
            }}>
              E
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.3rem", fontWeight: 700,
              color: "var(--navy)", margin: "0 0 6px",
            }}>
              Erik
            </h3>
            <p style={{ fontSize: 13, color: "#8a95a0", margin: "0 0 4px" }}>
              Host of The Cold Sun Podcast
            </p>
            <p style={{ fontSize: 13, color: "#8a95a0" }}>
              Founder, Cold Sun Global
            </p>
          </div>

          {/* About text */}
          <div>
            <p style={{
              fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
              color: "var(--orange)", fontWeight: 600, marginBottom: 12,
            }}>
              About the Show
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              color: "var(--navy)", fontWeight: 700, margin: "0 0 10px",
            }}>
              Enterprise Tech. No Filler.
            </h2>
            <div style={{
              width: 52, height: 4, background: "var(--orange)",
              borderRadius: 2, marginBottom: 24,
            }} />
            <p style={{
              fontSize: "0.975rem", color: "#6b7a8a", lineHeight: 1.8,
              marginBottom: 16,
            }}>
              The Cold Sun Podcast is where enterprise transformation gets real. Each episode cuts through vendor marketing to deliver honest analysis on the platforms, practices, and decisions that shape modern field service, ERP, and AI deployments.
            </p>
            <p style={{
              fontSize: "0.975rem", color: "#6b7a8a", lineHeight: 1.8,
            }}>
              No paid guest spots. No product demos disguised as interviews. Just 15 years of implementation experience distilled into conversations that help enterprise leaders make smarter decisions.
            </p>
          </div>
        </div>
      </section>

      <BeAGuestCTA />

    </main>
  );
}
