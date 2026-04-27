import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "var(--navy)" }}>
      <div className="text-center max-w-xl">
        <div className="text-8xl font-bold mb-4" style={{ color: "var(--orange)", fontFamily: "'Playfair Display',serif" }}>404</div>
        <h1 className="text-3xl text-white mb-4" style={{ fontFamily: "'Playfair Display',serif" }}>
          This Page Doesn&apos;t Exist
        </h1>
        <p className="text-white/60 text-lg mb-10" style={{ fontFamily: "'DM Sans',sans-serif" }}>
          But your transformation does. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">Go to Homepage</Link>
          <Link href="/contact" className="btn-ghost">Talk to an Expert</Link>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            ["Solutions", "/solutions"],
            ["Industries", "/industries"],
            ["Services", "/services"],
            ["About Us", "/about"],
          ].map(([l, h]) => (
            <Link key={l} href={h} className="text-sm text-white/40 hover:text-white/80 transition-colors" style={{ fontFamily: "'DM Sans',sans-serif" }}>{l}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
