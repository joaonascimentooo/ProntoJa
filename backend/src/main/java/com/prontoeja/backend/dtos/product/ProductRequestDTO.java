package com.prontoeja.backend.dtos.product;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductRequestDTO {
    private String id;
    private String name;
    private String description;
    private String imageUrl;
    private BigDecimal price;
}
