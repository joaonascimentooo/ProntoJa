package com.prontoeja.backend.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prontoeja.backend.dtos.product.ProductRequestDTO;
import com.prontoeja.backend.dtos.product.ProductResponseDTO;
import com.prontoeja.backend.models.Product;
import com.prontoeja.backend.services.ProductService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("/all")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping
    public ResponseEntity<ProductResponseDTO> createProduct(@RequestBody ProductRequestDTO productRequestDTO) {
        return ResponseEntity.ok(productService.createProduct(productRequestDTO));
    }
}
