package com.cozy.ecommerce.service;

import com.cozy.ecommerce.model.Product;
import com.cozy.ecommerce.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * ProductService — Business logic layer for products.
 *
 * Sits between the Controller and the Repository.
 * Currently thin because CRUD is straightforward,
 * but this is where pricing rules, search logic,
 * inventory checks, etc. would live in production.
 */
@Service
public class ProductService {

    private final ProductRepository productRepository;

    /**
     * Constructor injection — preferred over field injection
     * for testability and immutability.
     */
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    /**
     * Retrieve every product in the catalogue.
     *
     * @return list of all Product entities
     */
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    /**
     * Retrieve a single product by its ID.
     *
     * @param id the product ID
     * @return the Product entity
     * @throws RuntimeException if the product is not found
     */
    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(
                        "Product not found with id: " + id));
    }

    /**
     * Save a new product (used by the data initialiser).
     *
     * @param product the Product entity to persist
     * @return the saved Product with generated ID
     */
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }
}
