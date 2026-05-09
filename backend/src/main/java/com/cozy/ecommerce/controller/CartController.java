package com.cozy.ecommerce.controller;

import com.cozy.ecommerce.dto.CartItemRequest;
import com.cozy.ecommerce.model.CartItem;
import com.cozy.ecommerce.service.CartService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * CartController — REST API for shopping cart operations.
 *
 * Base path: /api/cart
 *
 * Endpoints:
 *   GET    /api/cart      → list all cart items
 *   POST   /api/cart      → add a product to the cart
 *   PUT    /api/cart/{id} → update quantity of a cart item
 *   DELETE /api/cart/{id} → remove a single cart item
 *   DELETE /api/cart      → clear the entire cart
 */
@RestController
@RequestMapping("/api/cart")
public class CartController {

    private final CartService cartService;

    /** Constructor injection of the service layer. */
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    /**
     * GET /api/cart
     *
     * Returns all items in the cart, each with full
     * product data embedded (eager fetch).
     */
    @GetMapping
    public ResponseEntity<List<CartItem>> getCartItems() {
        return ResponseEntity.ok(cartService.getCartItems());
    }

    /**
     * POST /api/cart
     *
     * Adds a product to the cart. If the product is already
     * present, its quantity is incremented by 1.
     *
     * Request body: { "productId": 3 }
     */
    @PostMapping
    public ResponseEntity<CartItem> addToCart(
            @RequestBody CartItemRequest request) {
        CartItem item = cartService.addToCart(request.getProductId());
        return ResponseEntity.ok(item);
    }

    /**
     * PUT /api/cart/{id}
     *
     * Updates the quantity of an existing cart item.
     * If the new quantity is 0 or less, the item is removed.
     *
     * Request body: { "quantity": 5 }
     *
     * @param id the cart item ID from the URL path
     */
    @PutMapping("/{id}")
    public ResponseEntity<CartItem> updateQuantity(
            @PathVariable Long id,
            @RequestBody CartItemRequest request) {
        CartItem item = cartService.updateQuantity(id, request.getQuantity());
        return ResponseEntity.ok(item);
    }

    /**
     * DELETE /api/cart/{id}
     *
     * Removes a single item from the cart.
     *
     * @param id the cart item ID to delete
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeFromCart(@PathVariable Long id) {
        cartService.removeFromCart(id);
        return ResponseEntity.noContent().build();
    }

    /**
     * DELETE /api/cart
     *
     * Clears the entire cart (removes all items).
     */
    @DeleteMapping
    public ResponseEntity<Void> clearCart() {
        cartService.clearCart();
        return ResponseEntity.noContent().build();
    }
}
