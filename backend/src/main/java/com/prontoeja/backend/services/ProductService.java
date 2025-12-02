package com.prontoeja.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.prontoeja.backend.dtos.product.ProductRequestDTO;
import com.prontoeja.backend.dtos.product.ProductResponseDTO;
import com.prontoeja.backend.models.Product;
import com.prontoeja.backend.repositories.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public ProductResponseDTO createProduct(ProductRequestDTO productRequestDTO) {

        Product product = new Product();
        product.setName(productRequestDTO.getName());
        product.setDescription(productRequestDTO.getDescription());
        product.setImageUrl(productRequestDTO.getImageUrl());
        product.setPrice(productRequestDTO.getPrice());
        
        Product savedProduct = productRepository.save(product);
        
        ProductResponseDTO productResponseDTO = new ProductResponseDTO();
        productResponseDTO.setId(savedProduct.getId());
        productResponseDTO.setName(savedProduct.getName());
        productResponseDTO.setDescription(savedProduct.getDescription());
        productResponseDTO.setImageUrl(savedProduct.getImageUrl());
        productResponseDTO.setPrice(savedProduct.getPrice());
        return productResponseDTO;
    }
}
