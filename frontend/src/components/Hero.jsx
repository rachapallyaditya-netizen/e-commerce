/**
 * Hero.jsx — Welcoming hero section
 *
 * Full-width warm gradient backdrop with tagline,
 * description text, and CTA button. A floating
 * decorative element adds life to the right side.
 */

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-cream via-oatmeal/30 to-sage/20"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10">
        {/* ── Text content ───────────────────────────────── */}
        <div className="flex-1 text-center md:text-left space-y-6 z-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            Comfort, Curated.
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-charcoal">
            Make Your Space
            <br />
            <span className="text-terracotta">Feel Like Home</span>
          </h1>

          <p className="max-w-lg mx-auto md:mx-0 text-charcoal/60 text-lg leading-relaxed">
            Handpicked home goods, candles, textiles, and little luxuries
            designed to wrap your world in warmth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a href="#products" className="btn-primary text-base" id="hero-cta">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              Shop Now
            </a>
            <a href="#about" className="btn-outline text-base" id="hero-secondary-cta">
              Our Story
            </a>
          </div>
        </div>

        {/* ── Decorative illustration ────────────────────── */}
        <div className="flex-1 flex justify-center z-10">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
            {/* Background circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-terracotta/20 via-sage/20 to-oatmeal/40" />

            {/* Cozy illustration — candle + plant SVG */}
            <svg
              className="absolute inset-0 w-full h-full p-10"
              viewBox="0 0 200 200" fill="none"
            >
              {/* Candle */}
              <rect x="55" y="90" width="30" height="60" rx="6" fill="#E8DFD0" />
              <rect x="60" y="95" width="20" height="50" rx="4" fill="#FFFAF3" />
              <ellipse cx="70" cy="85" rx="8" ry="10" fill="#C67D5B" opacity="0.8" />
              <line x1="70" y1="90" x2="70" y2="75" stroke="#3D3D3D" strokeWidth="1.5" />

              {/* Plant pot */}
              <path d="M115 150 L125 105 L155 105 L145 150 Z" fill="#C67D5B" />
              <rect x="122" y="100" width="36" height="8" rx="3" fill="#A96544" />

              {/* Leaves */}
              <path d="M140 100 Q 145 60, 125 50 Q 140 55, 140 100" fill="#A3B18A" />
              <path d="M140 100 Q 155 55, 160 45 Q 157 60, 140 100" fill="#8A9B6E" />
              <path d="M140 100 Q 130 70, 110 65 Q 128 68, 140 100" fill="#A3B18A" opacity="0.7" />
              <path d="M140 100 Q 160 70, 170 60 Q 165 75, 140 100" fill="#A3B18A" opacity="0.6" />

              {/* Steam wisps from candle */}
              <path d="M68 72 Q 65 60, 70 50" stroke="#C67D5B" strokeWidth="1" opacity="0.4" fill="none" />
              <path d="M72 72 Q 75 58, 72 48" stroke="#C67D5B" strokeWidth="1" opacity="0.3" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Background blobs ─────────────────────────────── */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-terracotta/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-sage/10 blur-3xl" />
    </section>
  );
}
