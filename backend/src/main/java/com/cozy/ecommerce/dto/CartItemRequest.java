package com.cozy.ecommerce.dto;

/**
 * CartItemRequest — DTO for cart add/update requests.
 *
 * Used as the request body when the frontend POSTs
 * or PUTs to the cart endpoints. Keeps the controller
 * API clean by separating transport objects from entities.
 */
public class CartItemRequest {

    /** The ID of the product to add to the cart. */
    private Long productId;

    /** The desired quantity (used for updates). */
    private Integer quantity;

    /* ── Getters & Setters ─────────────────────────────────── */

    public Long getProductId() { return productId; }
    public void setProductId(Long productId) { this.productId = productId; }

    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
}
