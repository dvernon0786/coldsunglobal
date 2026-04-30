"use client";

export default function PodcastHero({ spotifyShowId }: { spotifyShowId: string }) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--navy)",
          padding: "80px 24px 72px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Subtle radial glow – top right */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(246,137,0,0.18) 0%, transparent 65%)",
          transform: "translate(25%,-25%)", pointerEvents: "none",
        }} />
        {/* Subtle radial glow – bottom left */}
        <div style={{
          position: "absolute", bottom: 0, left: 0,
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(10,74,122,0.4) 0%, transparent 70%)",
          transform: "translate(-30%,30%)", pointerEvents: "none",
        }} />

        <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
          <p style={{
            fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--orange)", fontWeight: 600, marginBottom: 20,
          }}>
            Cold Sun Global — Podcast
          </p>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 800, lineHeight: 1.1,
            color: "#fff", margin: "0 0 24px",
          }}>
            Welcome to the home of<br />
            <span style={{ color: "var(--orange)" }}>The Cold Sun Podcast.</span>
          </h1>

          <p style={{
            fontSize: "1.15rem", color: "rgba(255,255,255,0.68)",
            lineHeight: 1.75, maxWidth: 580, margin: "0 auto 16px",
          }}>
            Unfiltered conversations on enterprise field service, ERP transformation,
            AI agents, and the decisions that separate successful implementations
            from expensive failures.
          </p>
          <p style={{ fontSize: "0.9rem", color: "var(--orange)", fontWeight: 600, marginBottom: 40 }}>
            New episode every week.
          </p>

          {/* Platform badges */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              {
                label: "Spotify",
                href: `https://open.spotify.com/show/${spotifyShowId}`,
                bg: "#1DB954", color: "#fff",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                ),
              },
              {
                label: "Apple Podcasts",
                href: "https://podcasts.apple.com/",
                bg: "rgba(255,255,255,0.1)", color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/>
                  </svg>
                ),
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@coldsunglobal",
                bg: "rgba(255,255,255,0.1)", color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                ),
              },
            ].map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: p.bg, color: p.color,
                  border: p.border ?? "none",
                  padding: "11px 22px", borderRadius: 50,
                  fontWeight: 600, fontSize: 14,
                  textDecoration: "none",
                  transition: "opacity 0.15s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {p.icon} {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

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
              src={`https://open.spotify.com/embed/show/${spotifyShowId}?utm_source=generator&theme=0`}
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
              href={`https://open.spotify.com/show/${spotifyShowId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--orange)", fontWeight: 600, textDecoration: "none" }}
            >
              Open directly on Spotify →
            </a>
          </p>
        </div>
      </section>

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
    </>
  );
}
