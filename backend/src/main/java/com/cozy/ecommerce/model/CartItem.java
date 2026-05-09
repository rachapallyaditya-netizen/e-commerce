package com.cozy.ecommerce.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;

/**
 * CartItem — JPA Entity representing a single line item in the cart.
 *
 * Each CartItem links to a Product and holds a quantity.
 * For this prototype we use a single shared cart (no user sessions).
 *
 * Fields:
 *   id       — Auto-generated primary key
 *   product  — The associated Product (eager-fetched)
 *   quantity — Number of units (minimum 1)
 */
@Entity
@Table(name = "cart_items")
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Many cart items can reference the same product,
     * but each cart row is a unique entry.
     * EAGER fetch ensures the full product JSON is
     * included when the cart is serialised.
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Min(value = 1, message = "Quantity must be at least 1")
    @Column(nullable = false)
    private Integer quantity = 1;

    /* ── Constructors ────────────────────────────────────────── */

    /** Default no-arg constructor (required by JPA). */
    public CartItem() {}

    /** Convenience constructor. */
    public CartItem(Product product, Integer quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    /* ── Getters & Setters ───────────────────────────────────── */

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }

    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
}
