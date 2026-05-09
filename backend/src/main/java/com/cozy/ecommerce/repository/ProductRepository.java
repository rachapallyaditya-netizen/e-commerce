package com.cozy.ecommerce.repository;

import com.cozy.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ProductRepository — Data access layer for Product entities.
 *
 * Extends JpaRepository which provides all standard CRUD operations
 * out of the box (findAll, findById, save, deleteById, etc.).
 * No custom query methods are needed for the prototype.
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Spring Data JPA auto-generates the implementation at runtime.
    // Add custom finder methods here if needed, e.g.:
    // List<Product> findByCategory(String category);
}
