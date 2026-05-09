/**
 * CartContext.jsx — Global cart state fetching from API
 *
 * Provides: cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount
 */

import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

/* ── Context ──────────────────────────────────────────────────── */
const CartContext = createContext(null);

/* ── Provider ─────────────────────────────────────────────────── */
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Fetch initial cart from backend
  useEffect(() => {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => setCartItems(data))
      .catch(err => console.error("Error fetching cart:", err));
  }, []);

  const addToCart = useCallback((product) => {
    fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: product.id })
    })
      .then(res => res.json())
      .then(newItem => {
        setCartItems(prev => {
          // If the item already existed, replace it (quantity updated)
          const existing = prev.find(item => item.product.id === product.id);
          if (existing) {
            return prev.map(item => item.id === newItem.id ? newItem : item);
          }
          // Otherwise add new item
          return [...prev, newItem];
        });
      })
      .catch(err => console.error("Error adding to cart:", err));
  }, []);

  const updateQuantity = useCallback((cartItemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    
    fetch(`/api/cart/${cartItemId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity })
    })
      .then(res => res.json())
      .then(updatedItem => {
        setCartItems(prev => prev.map(item => item.id === cartItemId ? updatedItem : item));
      })
      .catch(err => console.error("Error updating cart quantity:", err));
  }, []);

  const removeFromCart = useCallback((cartItemId) => {
    fetch(`/api/cart/${cartItemId}`, {
      method: 'DELETE'
    })
      .then(() => {
        setCartItems(prev => prev.filter(item => item.id !== cartItemId));
      })
      .catch(err => console.error("Error removing from cart:", err));
  }, []);

  const clearCart = useCallback(() => {
    fetch('/api/cart', {
      method: 'DELETE'
    })
      .then(() => setCartItems([]))
      .catch(err => console.error("Error clearing cart:", err));
  }, []);

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [cartItems]
  );

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const value = useMemo(
    () => ({ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }),
    [cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/* ── Hook ─────────────────────────────────────────────────────── */
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a <CartProvider>');
  return ctx;
}
