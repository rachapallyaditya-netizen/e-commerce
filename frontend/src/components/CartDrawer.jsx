/**
 * CartDrawer.jsx — Slide-out cart drawer from the right
 */

import { useCart } from '../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" id="cart-drawer">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-warm-white shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-oatmeal/40">
          <h2 className="text-lg font-bold text-charcoal">Your Cart</h2>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-oatmeal/30 transition-colors" id="close-cart">
            <svg className="w-5 h-5 text-charcoal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 text-charcoal/40">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <p className="font-medium">Your cart is empty</p>
              <p className="text-sm">Browse our collection and find something cozy.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 bg-cream/60 rounded-2xl p-4 border border-oatmeal/30">
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-xl bg-oatmeal/30 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-terracotta/40" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="8" width="12" height="12" rx="2" opacity="0.3" />
                  </svg>
                </div>
                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-charcoal truncate">{item.product.name}</h4>
                  <p className="text-sm text-terracotta font-semibold mt-1">${(item.product.price * item.quantity).toFixed(2)}</p>
                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded-lg bg-oatmeal/50 flex items-center justify-center text-charcoal hover:bg-oatmeal transition-colors text-sm font-bold">−</button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded-lg bg-oatmeal/50 flex items-center justify-center text-charcoal hover:bg-oatmeal transition-colors text-sm font-bold">+</button>
                    <button onClick={() => removeFromCart(item.id)} className="ml-auto p-1.5 rounded-lg hover:bg-red-50 text-charcoal/30 hover:text-red-400 transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-oatmeal/40 px-6 py-5 space-y-4">
            <div className="flex justify-between text-charcoal">
              <span className="font-medium">Total</span>
              <span className="text-xl font-bold text-terracotta">${cartTotal.toFixed(2)}</span>
            </div>
            <button className="btn-primary w-full text-base" id="checkout-btn">Checkout</button>
            <button onClick={clearCart} className="w-full text-center text-sm text-charcoal/40 hover:text-red-400 transition-colors" id="clear-cart">Clear Cart</button>
          </div>
        )}
      </aside>
    </div>
  );
}
