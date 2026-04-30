"use client";

import { useState } from "react";

interface Episode {
  num: number;
  episodeId: string | null;
  title: string;
  desc: string;
  date: string;
  duration: string;
  bgColor: string;
  badge: string;
  href: string;
}

export default function EpisodeCards({ episodes, spotifyShowId }: { episodes: Episode[]; spotifyShowId: string }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const activeEp = activeIdx !== null ? episodes[activeIdx] : null;

  const embedSrc = activeEp?.episodeId
    ? `https://open.spotify.com/embed/episode/${activeEp.episodeId}?utm_source=generator&theme=0`
    : `https://open.spotify.com/embed/show/${spotifyShowId}?utm_source=generator&theme=0`;

  const openHref = activeEp?.href ?? `https://open.spotify.com/show/${spotifyShowId}`;

  return (
    <section style={{ padding: "72px 24px", background: "var(--off-white)" }}>
      <style>{`
        .ep-card { transition: transform 0.18s, box-shadow 0.18s; }
        .ep-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(4,54,95,0.11); }
        .ep-card:hover .ep-play { opacity: 1 !important; }
        @media (max-width: 768px) {
          .ep-zone { grid-template-columns: 1fr !important; }
          .ep-player { position: static !important; }
        }
      `}</style>

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
        <div style={{ width: 52, height: 4, background: "var(--orange)", borderRadius: 2, marginBottom: 48 }} />

        {/* Two-zone layout: sticky player left, episode list right */}
        <div className="ep-zone" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "start",
        }}>

          {/* LEFT — sticky player */}
          <div className="ep-player" style={{ position: "sticky", top: 88 }}>
            <div style={{
              borderRadius: 16, overflow: "hidden",
              border: "1px solid #e4e8ed",
              boxShadow: "0 4px 24px rgba(4,54,95,0.08)",
              marginBottom: 16,
            }}>
              <iframe
                key={embedSrc}
                src={embedSrc}
                width="100%"
                height="352"
                style={{ border: "none", display: "block" }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={activeEp ? activeEp.title : "The Cold Sun Podcast"}
              />
            </div>

            {/* Player caption */}
            <div style={{ paddingLeft: 4 }}>
              {activeEp ? (
                <>
                  <p style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "var(--orange)", marginBottom: 4,
                  }}>
                    Now Playing
                  </p>
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.95rem", fontWeight: 700, color: "var(--navy)",
                    lineHeight: 1.4, marginBottom: 8,
                  }}>
                    {activeEp.title}
                  </p>
                </>
              ) : (
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#9aa5b0", marginBottom: 8,
                }}>
                  Select an episode to play
                </p>
              )}
              <a
                href={openHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 12, fontWeight: 600, color: "var(--orange)",
                  textDecoration: "none",
                }}
              >
                Open in Spotify →
              </a>
            </div>
          </div>

          {/* RIGHT — episode list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {episodes.map((ep, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={ep.num}
                  role="button"
                  tabIndex={0}
                  className="ep-card"
                  onClick={() => setActiveIdx(idx)}
                  onKeyDown={(e) => e.key === "Enter" && setActiveIdx(idx)}
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    border: isActive ? "2px solid var(--orange)" : "1.5px solid #e4e8ed",
                    boxShadow: isActive ? "0 0 0 3px rgba(246,137,0,0.12)" : "none",
                    display: "flex",
                    cursor: "pointer",
                    outline: "none",
                    transition: "border 0.15s, box-shadow 0.15s",
                  }}
                >
                  {/* Artwork strip */}
                  <div style={{
                    background: ep.bgColor,
                    width: 88,
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    padding: "12px 0",
                  }}>
                    {/* Episode number */}
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 22, fontWeight: 800,
                      color: "rgba(255,255,255,0.3)",
                      lineHeight: 1,
                    }}>
                      {String(ep.num).padStart(2, "0")}
                    </span>

                    {/* Play icon — shows on hover or when active */}
                    <div className="ep-play" style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(0,0,0,0.18)",
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 0.15s",
                    }}>
                      {isActive ? (
                        /* Pause bars when active */
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      ) : (
                        /* Play triangle on hover */
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "14px 16px", flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        background: isActive ? "var(--orange)" : "var(--off-white)",
                        color: isActive ? "#fff" : "#9aa5b0",
                        padding: "3px 8px", borderRadius: 50,
                        transition: "background 0.15s, color 0.15s",
                        whiteSpace: "nowrap",
                      }}>
                        {ep.badge}
                      </span>
                      {isActive && (
                        <span style={{
                          fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
                          textTransform: "uppercase", color: "var(--orange)",
                        }}>
                          ● Now Playing
                        </span>
                      )}
                    </div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "0.9rem", fontWeight: 700, lineHeight: 1.35,
                      color: isActive ? "var(--navy)" : "var(--navy)",
                      margin: "0 0 6px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    } as React.CSSProperties}>
                      {ep.title}
                    </h3>
                    <span style={{ fontSize: 11, color: "#9aa5b0" }}>
                      {ep.date} · {ep.duration}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* All Episodes button */}
            <div style={{ textAlign: "center", marginTop: 8 }}>
              <a
                href={`https://open.spotify.com/show/${spotifyShowId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  border: "2px solid var(--navy)", color: "var(--navy)",
                  background: "transparent",
                  padding: "11px 28px", borderRadius: 8,
                  fontWeight: 700, fontSize: 13,
                  textDecoration: "none",
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
        </div>
      </div>
    </section>
  );
}
