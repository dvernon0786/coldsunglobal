import { Metadata } from "next";
import PodcastHero from "./podcast-hero";
import EpisodeCards from "./episode-cards";
import BeAGuestCTA from "./be-a-guest-cta";

export const metadata: Metadata = { title: "The Cold Sun Podcast" };

const episodes = [
  {
    num: 1,
    episodeId: "7rjiOQz7u4cq3PB4e63iwO",
    title: "Why Most Salesforce Implementations Fail (And How to Fix It)",
    desc: "The uncomfortable truth about why Salesforce projects go sideways — and the implementation patterns that actually stick across field service and enterprise deployments.",
    date: "April 2026",
    duration: "18 min",
    bgColor: "linear-gradient(135deg, #04365f 0%, #0a4a7a 100%)",
    badge: "Field Service",
    href: "https://open.spotify.com/episode/7rjiOQz7u4cq3PB4e63iwO",
  },
  {
    num: 2,
    episodeId: "6t4ImnoC1Jg72Ly0XDjuq4",
    title: "Salesforce or ServiceNow? Why Telecom Keeps Betting on the Wrong Horse",
    desc: "A platform-agnostic breakdown of the decision most telecom operators get wrong — and the criteria that should actually drive the Salesforce vs. ServiceNow call.",
    date: "March 2026",
    duration: "22 min",
    bgColor: "linear-gradient(135deg, #f68900 0%, #ffa733 100%)",
    badge: "AI & Agentforce",
    href: "https://open.spotify.com/episode/6t4ImnoC1Jg72Ly0XDjuq4",
  },
  {
    num: 3,
    episodeId: "2VIaiZa67HMeVfpMB5WVhU",
    title: "From Chaos to Clarity: A Real Telecom Field Service Transformation",
    desc: "A behind-the-scenes look at a real telecom FSM transformation — the decisions that worked, the ones that didn't, and what a successful go-live actually looks like.",
    date: "March 2026",
    duration: "25 min",
    bgColor: "linear-gradient(135deg, #0a4a7a 0%, #04365f 100%)",
    badge: "Field Service",
    href: "https://open.spotify.com/episode/2VIaiZa67HMeVfpMB5WVhU",
  },
  {
    num: 4,
    episodeId: null,
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
    episodeId: null,
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
    episodeId: null,
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
    <main style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <PodcastHero spotifyShowId={SPOTIFY_SHOW_ID} />
      <EpisodeCards episodes={episodes} spotifyShowId={SPOTIFY_SHOW_ID} />

      {/* ── HOST + ABOUT ─────────────────────────────────────────────────── */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 64, alignItems: "center",
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: 120, height: 120, borderRadius: "50%",
              background: "linear-gradient(135deg, var(--navy) 0%, #0a4a7a 100%)",
              margin: "0 auto 20px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 40, fontWeight: 800, color: "var(--orange)",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}>
              E
            </div>
            <h3 style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "1.3rem", fontWeight: 700,
              color: "var(--navy)", margin: "0 0 6px",
            }}>
              Erik Wiltjer
            </h3>
            <p style={{ fontSize: 13, color: "#8a95a0", margin: "0 0 4px" }}>
              Host of The Cold Sun Podcast
            </p>
            <p style={{ fontSize: 13, color: "#8a95a0" }}>
              Founder, Cold Sun Global
            </p>
          </div>

          <div>
            <p style={{
              fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
              color: "var(--orange)", fontWeight: 600, marginBottom: 12,
            }}>
              About the Show
            </p>
            <h2 style={{
              fontFamily: "Arial, Helvetica, sans-serif",
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
              No paid guest spots. No product demos disguised as interviews. Just 20 years of Salesforce implementation experience distilled into conversations that help enterprise leaders make smarter decisions.
            </p>
          </div>
        </div>
      </section>

      <BeAGuestCTA />
    </main>
  );
}
