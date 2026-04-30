"use client";

interface Episode {
  num: number;
  title: string;
  desc: string;
  date: string;
  duration: string;
  bgColor: string;
  badge: string;
  href: string;
}

export default function EpisodeCards({ episodes, spotifyShowId }: { episodes: Episode[]; spotifyShowId: string }) {
  return (
    <section style={{ padding: "72px 24px", background: "var(--off-white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{
          fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
          color: "var(--orange)", fontWeight: 600, marginBottom: 12,
        }}>
          Episodes
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          color: "var(--navy)", fontWeight: 700, margin: "0 0 10px",
        }}>
          Latest Shows
        </h2>
        <div style={{
          width: 52, height: 4, background: "var(--orange)",
          borderRadius: 2, marginBottom: 48,
        }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 24,
        }}>
          {episodes.map((ep) => (
            <a
              key={ep.num}
              href={ep.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <article style={{
                background: "#fff",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid #e4e8ed",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
              }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(4,54,95,0.12)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Artwork header — matches FoFS episode card style */}
                <div style={{
                  background: ep.bgColor,
                  height: 180,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 52, fontWeight: 800,
                    color: "rgba(255,255,255,0.25)",
                    lineHeight: 1,
                  }}>
                    {String(ep.num).padStart(2, "0")}
                  </span>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    background: "rgba(255,255,255,0.18)",
                    color: "#fff",
                    padding: "5px 12px", borderRadius: 50,
                  }}>
                    {ep.badge}
                  </span>
                </div>

                {/* Content */}
                <div style={{
                  padding: "22px 22px 20px",
                  display: "flex", flexDirection: "column", gap: 10, flex: 1,
                }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1rem", fontWeight: 700, lineHeight: 1.4,
                    color: "var(--navy)", margin: 0,
                  }}>
                    {ep.title}
                  </h3>
                  <p style={{
                    fontSize: 13, color: "#6b7a8a", lineHeight: 1.65, margin: 0,
                  }}>
                    {ep.desc}
                  </p>
                  <div style={{
                    marginTop: "auto", paddingTop: 14,
                    borderTop: "1px solid #edf0f3",
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                    <span style={{ fontSize: 12, color: "#9aa5b0" }}>
                      {ep.date} · {ep.duration}
                    </span>
                    <span style={{
                      fontSize: 12, fontWeight: 700,
                      color: "var(--orange)",
                      display: "flex", alignItems: "center", gap: 4,
                    }}>
                      Listen
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>

        {/* Load More — matches FoFS pattern */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a
            href={`https://open.spotify.com/show/${spotifyShowId}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "2px solid var(--navy)", color: "var(--navy)",
              background: "transparent",
              padding: "12px 32px", borderRadius: 8,
              fontWeight: 700, fontSize: 14,
              textDecoration: "none", letterSpacing: "0.02em",
              transition: "background 0.15s, color 0.15s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--navy)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--navy)";
            }}
          >
            All Episodes on Spotify →
          </a>
        </div>
      </div>
    </section>
  );
}
