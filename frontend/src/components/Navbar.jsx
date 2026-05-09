/**
 * Navbar.jsx — Top navigation bar
 *
 * Features:
 *  - Sticky top bar with frosted-glass effect
 *  - Brand logo / name on the left
 *  - Cart icon with animated item-count badge on the right
 */

import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar({ onCartClick }) {
  const { cartCount } = useCart();
  const [popping, setPopping] = useState(false);

  const handleCartClick = () => {
    setPopping(true);
    setTimeout(() => setPopping(false), 300);
    onCartClick();
  };

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-40 w-full backdrop-blur-md bg-cream/80 border-b border-oatmeal/40"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4 md:px-8">
        {/* ── Brand ──────────────────────────────────────── */}
        <a href="/" className="flex items-center gap-2 group" id="brand-logo">
          {/* Leaf icon */}
          <svg
            className="w-8 h-8 text-sage transition-transform duration-300 group-hover:rotate-12"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.5-3 2-7 2-10S15 2 12 2z" />
            <path d="M2 12h10" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-charcoal">
            Cozy
          </span>
        </a>

        {/* ── Nav links (desktop) ────────────────────────── */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal/70">
          <a href="#products" className="hover:text-terracotta transition-colors duration-200">Shop</a>
          <a href="#about" className="hover:text-terracotta transition-colors duration-200">About</a>
          <a href="#contact" className="hover:text-terracotta transition-colors duration-200">Contact</a>
        </div>

        {/* ── Cart button ────────────────────────────────── */}
        <button
          id="cart-button"
          onClick={handleCartClick}
          className="relative p-2 rounded-xl hover:bg-oatmeal/40 transition-colors duration-200"
          aria-label="Open cart"
        >
          <svg
            className="w-6 h-6 text-charcoal"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>

          {cartCount > 0 && (
            <span
              className={`badge absolute -top-1 -right-1 ${popping ? 'animate-pop' : ''}`}
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
