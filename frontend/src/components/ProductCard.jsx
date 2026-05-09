/**
 * ProductCard.jsx — A single product tile
 *
 * Displays:
 *  - An illustrative SVG placeholder for the product image
 *  - Product name, short description, and price
 *  - "Add to Cart" button with micro-animation feedback
 */

import { useState } from 'react';
import { useCart } from '../context/CartContext';

/* ── Simple illustrative SVG icons per category ───────────── */
const illustrations = {
  Home:     (
    <svg viewBox="0 0 120 120" className="w-full h-full p-6">
      <rect x="35" y="40" width="22" height="45" rx="5" fill="#E8DFD0" />
      <rect x="39" y="44" width="14" height="37" rx="3" fill="#FFFAF3" />
      <ellipse cx="46" cy="36" rx="6" ry="8" fill="#C67D5B" opacity="0.8" />
      <line x1="46" y1="40" x2="46" y2="28" stroke="#3D3D3D" strokeWidth="1.2" />
      <rect x="63" y="50" width="22" height="35" rx="5" fill="#E8DFD0" />
      <rect x="67" y="54" width="14" height="27" rx="3" fill="#FFFAF3" />
      <ellipse cx="74" cy="46" rx="5" ry="7" fill="#A3B18A" opacity="0.7" />
      <line x1="74" y1="50" x2="74" y2="39" stroke="#3D3D3D" strokeWidth="1.2" />
    </svg>
  ),
  Textiles: (
    <svg viewBox="0 0 120 120" className="w-full h-full p-6">
      <rect x="25" y="35" width="70" height="55" rx="8" fill="#E8DFD0" />
      <rect x="30" y="40" width="60" height="45" rx="6" fill="#FFFAF3" />
      {[0,1,2,3,4,5].map(i => (
        <line key={i} x1={35+i*10} y1="45" x2={35+i*10} y2="80" stroke="#C67D5B" strokeWidth="1" opacity="0.3" />
      ))}
      {[0,1,2,3].map(i => (
        <line key={i} x1="35" y1={50+i*10} x2="85" y2={50+i*10} stroke="#A3B18A" strokeWidth="1" opacity="0.3" />
      ))}
    </svg>
  ),
  Kitchen:  (
    <svg viewBox="0 0 120 120" className="w-full h-full p-6">
      <ellipse cx="60" cy="75" rx="25" ry="8" fill="#E8DFD0" />
      <path d="M40 75 Q40 40, 60 35 Q80 40, 80 75" fill="#FFFAF3" stroke="#E8DFD0" strokeWidth="1.5" />
      <path d="M52 35 Q50 25, 55 20" stroke="#C67D5B" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M60 33 Q58 22, 62 18" stroke="#C67D5B" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M68 35 Q67 26, 70 22" stroke="#C67D5B" strokeWidth="1.5" fill="none" opacity="0.3" />
      <ellipse cx="60" cy="55" rx="4" ry="3" fill="#A3B18A" opacity="0.3" />
      <ellipse cx="52" cy="60" rx="2" ry="2" fill="#C67D5B" opacity="0.2" />
    </svg>
  ),
  'Décor':  (
    <svg viewBox="0 0 120 120" className="w-full h-full p-6">
      <rect x="52" y="60" width="16" height="30" rx="3" fill="#E8DFD0" />
      <path d="M60 60 Q55 30, 45 20 Q58 28, 60 60" fill="#A3B18A" />
      <path d="M60 60 Q65 25, 80 18 Q68 30, 60 60" fill="#8A9B6E" />
      <path d="M60 60 Q50 40, 35 35 Q48 38, 60 60" fill="#A3B18A" opacity="0.6" />
      <path d="M60 60 Q70 35, 85 30 Q72 38, 60 60" fill="#A3B18A" opacity="0.5" />
    </svg>
  ),
};

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 800);
  };

  const illustration = illustrations[product.category] || illustrations['Home'];

  return (
    <article className="card group flex flex-col" id={`product-${product.id}`}>
      {/* ── Image area ─────────────────────────────────── */}
      <div className="relative aspect-square bg-gradient-to-br from-oatmeal/30 to-sage/10 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-110">
          {illustration}
        </div>

        {/* Category tag */}
        <span className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider bg-warm-white/80 backdrop-blur-sm text-charcoal/60 px-2.5 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* ── Info ───────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        <h3 className="font-semibold text-charcoal leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-charcoal/50 leading-relaxed flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-terracotta">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={handleAdd}
            className={`
              inline-flex items-center gap-1.5 text-sm font-medium
              px-4 py-2 rounded-xl transition-all duration-300
              ${added
                ? 'bg-sage text-warm-white scale-[0.97]'
                : 'bg-terracotta/10 text-terracotta hover:bg-terracotta hover:text-warm-white'
              }
            `}
            id={`add-to-cart-${product.id}`}
          >
            {added ? (
              <>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Added!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
