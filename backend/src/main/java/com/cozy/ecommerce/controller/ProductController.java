package com.cozy.ecommerce.controller;

import com.cozy.ecommerce.model.Product;
import com.cozy.ecommerce.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * ProductController — REST API for product operations.
 *
 * Base path: /api/products
 *
 * Endpoints:
 *   GET  /api/products      → list all products
 *   GET  /api/products/{id} → get a single product by ID
 */
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    /** Constructor injection of the service layer. */
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    /**
     * GET /api/products
     *
     * Returns the full product catalogue as a JSON array.
     * Used by the frontend ProductGrid to render cards.
     */
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    /**
     * GET /api/products/{id}
     *
     * Returns a single product by its ID.
     * Could be used for a future product detail page.
     *
     * @param id the product ID from the URL path
     */
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }
}
