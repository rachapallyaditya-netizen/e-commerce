/**
 * ProductGrid.jsx — Responsive product grid
 */

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (

    <section id="products" className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="text-center mb-12 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-sage">
          Handpicked for you
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
          Our Collection
        </h2>
        <p className="max-w-md mx-auto text-charcoal/50">
          Every piece is chosen to bring warmth, texture, and a touch of everyday luxury to your space.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
