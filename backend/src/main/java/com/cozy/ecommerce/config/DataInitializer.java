package com.cozy.ecommerce.config;

import com.cozy.ecommerce.model.Product;
import com.cozy.ecommerce.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * DataInitializer — Seeds the H2 database with sample products.
 *
 * Runs automatically on application startup via CommandLineRunner.
 * The product data here mirrors the frontend's products.js exactly,
 * so the API responses match what the React app expects.
 */
@Configuration
public class DataInitializer {

    @Bean
    public CommandLineRunner seedProducts(ProductRepository repo) {
        return args -> {
            repo.save(new Product(
                "Vanilla Bean Soy Candle",
                "Hand-poured soy wax candle with real vanilla extract. Burns up to 45 hours.",
                24.00, "/images/candle.svg", "Home"));

            repo.save(new Product(
                "Chunky Knit Throw Blanket",
                "Ultra-soft chenille throw in oatmeal. Perfect for movie nights.",
                68.00, "/images/blanket.svg", "Textiles"));

            repo.save(new Product(
                "Ceramic Pour-Over Set",
                "Minimalist ceramic dripper + carafe. Makes 3 cups of perfect coffee.",
                42.00, "/images/coffee.svg", "Kitchen"));

            repo.save(new Product(
                "Linen Cushion Cover",
                "Stonewashed linen in sage green. Fits standard 18x18\" inserts.",
                32.00, "/images/cushion.svg", "Textiles"));

            repo.save(new Product(
                "Dried Eucalyptus Bundle",
                "Preserved eucalyptus stems. Lasts 12+ months with no water needed.",
                18.00, "/images/eucalyptus.svg", "Decor"));

            repo.save(new Product(
                "Stoneware Mug - Speckled",
                "Handmade speckled stoneware mug, 12 oz. Microwave & dishwasher safe.",
                22.00, "/images/mug.svg", "Kitchen"));

            repo.save(new Product(
                "Cotton Waffle Robe",
                "Lightweight waffle-weave robe in warm white. One size fits most.",
                55.00, "/images/robe.svg", "Textiles"));

            repo.save(new Product(
                "Wooden Recipe Card Holder",
                "Walnut wood stand for recipe cards or small prints. Handcrafted.",
                16.00, "/images/holder.svg", "Kitchen"));

            System.out.println(">>> Seeded 8 products into H2 database.");
        };
    }
}
