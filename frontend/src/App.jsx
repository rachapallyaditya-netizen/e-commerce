/**
 * App.jsx — Root application component
 *
 * Composes all sections and wraps everything
 * in the CartProvider for global cart state.
 */

import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-cream">
        <Navbar onCartClick={() => setCartOpen(true)} />
        <main className="flex-1">
          <Hero />
          <ProductGrid />
        </main>
        <Footer />
        <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  );
}
