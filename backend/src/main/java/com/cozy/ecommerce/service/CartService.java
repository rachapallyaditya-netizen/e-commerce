package com.cozy.ecommerce.service;

import com.cozy.ecommerce.model.CartItem;
import com.cozy.ecommerce.model.Product;
import com.cozy.ecommerce.repository.CartItemRepository;
import com.cozy.ecommerce.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * CartService — Business logic layer for shopping cart operations.
 *
 * Handles:
 *  1. Retrieving all items in the cart
 *  2. Adding a product (or incrementing if already present)
 *  3. Updating the quantity of an existing cart item
 *  4. Removing a single cart item
 *  5. Clearing the entire cart
 *
 * All mutating methods are @Transactional to ensure
 * data consistency within the H2 database.
 */
@Service
public class CartService {

    private final CartItemRepository cartItemRepository;
    private final ProductRepository  productRepository;

    /** Constructor injection for both repositories. */
    public CartService(CartItemRepository cartItemRepository,
                       ProductRepository productRepository) {
        this.cartItemRepository = cartItemRepository;
        this.productRepository  = productRepository;
    }

    /**
     * Get all items currently in the cart.
     *
     * @return list of CartItem entities (each includes full Product data)
     */
    public List<CartItem> getCartItems() {
        return cartItemRepository.findAll();
    }

    /**
     * Add a product to the cart.
     *
     * If the product is already in the cart, its quantity is
     * incremented by 1 instead of creating a duplicate row.
     *
     * @param productId the ID of the product to add
     * @return the created or updated CartItem
     * @throws RuntimeException if the product ID is invalid
     */
    @Transactional
    public CartItem addToCart(Long productId) {
        // Step 1: Verify the product exists
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException(
                        "Product not found with id: " + productId));

        // Step 2: Check if this product is already in the cart
        return cartItemRepository.findByProductId(productId)
                .map(existingItem -> {
                    // Product already in cart → increment quantity
                    existingItem.setQuantity(existingItem.getQuantity() + 1);
                    return cartItemRepository.save(existingItem);
                })
                .orElseGet(() -> {
                    // New product → create a fresh cart item
                    CartItem newItem = new CartItem(product, 1);
                    return cartItemRepository.save(newItem);
                });
    }

    /**
     * Update the quantity of a specific cart item.
     *
     * If quantity drops to 0 or below, the item is removed.
     *
     * @param cartItemId the ID of the cart item to update
     * @param quantity   the new desired quantity
     * @return the updated CartItem
     * @throws RuntimeException if the cart item is not found
     */
    @Transactional
    public CartItem updateQuantity(Long cartItemId, Integer quantity) {
        CartItem item = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new RuntimeException(
                        "Cart item not found with id: " + cartItemId));

        if (quantity <= 0) {
            // Quantity zero or negative → remove the item entirely
            cartItemRepository.delete(item);
            return item;
        }

        item.setQuantity(quantity);
        return cartItemRepository.save(item);
    }

    /**
     * Remove a single item from the cart by its ID.
     *
     * @param cartItemId the ID of the cart item to remove
     */
    @Transactional
    public void removeFromCart(Long cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }

    /**
     * Clear every item from the cart.
     */
    @Transactional
    public void clearCart() {
        cartItemRepository.deleteAll();
    }
}
