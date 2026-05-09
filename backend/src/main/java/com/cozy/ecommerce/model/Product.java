package com.cozy.ecommerce.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

/**
 * Product — JPA Entity representing a store product.
 *
 * Maps directly to the "products" table in the database.
 * The field names mirror the frontend data shape so JSON
 * serialisation works without any custom mapping.
 *
 * Fields:
 *   id          — Auto-generated primary key
 *   name        — Display name (required)
 *   description — Short product blurb
 *   price       — Unit price in USD (must be > 0)
 *   imageUrl    — Path/URL to product image
 *   category    — Grouping label (Home, Kitchen, etc.)
 */
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Product name is required")
    @Column(nullable = false)
    private String name;

    @Column(length = 500)
    private String description;

    @Positive(message = "Price must be greater than zero")
    @Column(nullable = false)
    private Double price;

    private String imageUrl;

    private String category;

    /* ── Constructors ────────────────────────────────────────── */

    /** Default no-arg constructor (required by JPA). */
    public Product() {}

    /** Full-arg constructor for convenience. */
    public Product(String name, String description, Double price,
                   String imageUrl, String category) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.category = category;
    }

    /* ── Getters & Setters ───────────────────────────────────── */

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
}
