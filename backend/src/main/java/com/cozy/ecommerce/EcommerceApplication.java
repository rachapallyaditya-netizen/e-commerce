package com.cozy.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * EcommerceApplication — Spring Boot entry point.
 *
 * Bootstraps the embedded Tomcat server, scans for components,
 * and initialises the H2 in-memory database via JPA auto-config.
 */
@SpringBootApplication
public class EcommerceApplication {

    public static void main(String[] args) {
        SpringApplication.run(EcommerceApplication.class, args);
    }
}
