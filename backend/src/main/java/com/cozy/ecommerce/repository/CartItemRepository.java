package com.cozy.ecommerce.repository;

import com.cozy.ecommerce.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * CartItemRepository — Data access layer for CartItem entities.
 *
 * Includes a custom finder to look up a cart item by its
 * associated product ID, which prevents duplicate entries
 * when adding the same product to the cart multiple times.
 */
@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    /**
     * Find a cart item by the product's ID.
     *
     * @param productId the ID of the associated product
     * @return an Optional containing the cart item if found
     */
    Optional<CartItem> findByProductId(Long productId);
}
