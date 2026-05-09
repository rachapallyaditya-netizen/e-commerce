/**
 * Footer.jsx — Minimal warm footer
 */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-charcoal text-warm-white/70">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-7 h-7 text-sage" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.5-3 2-7 2-10S15 2 12 2z" />
                <path d="M2 12h10" />
              </svg>
              <span className="text-lg font-bold text-warm-white">Cozy</span>
            </div>
            <p className="text-sm leading-relaxed">
              Comfort, curated. Handpicked home goods designed to wrap your world in warmth.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-white">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-terracotta transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Best Sellers</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-terracotta transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-white">Get in Touch</h4>
            <p className="text-sm">hello@cozystore.com</p>
            <div className="flex gap-3">
              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded-full bg-warm-white/10 flex items-center justify-center hover:bg-terracotta transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* Pinterest */}
              <a href="#" className="w-9 h-9 rounded-full bg-warm-white/10 flex items-center justify-center hover:bg-terracotta transition-colors" aria-label="Pinterest">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-warm-white/10 text-center text-xs text-warm-white/30">
          © {year} Cozy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
