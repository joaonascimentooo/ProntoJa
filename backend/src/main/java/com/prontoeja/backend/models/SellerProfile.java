package com.prontoeja.backend.models;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import com.prontoeja.backend.enums.SellerStatus;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "seller_profiles")
@Getter
@Setter
public class SellerProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    
    @OneToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column(name = "business_name")
    private String businessName;

    @Column(name = "tax_id")
    private String taxId;

    @Column(name = "document_url")
    private String documentUrl;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SellerStatus status = SellerStatus.PENDING;
    
    @Column(length = 1000)
    private String description;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @Column(name = "approved_at")
    private LocalDateTime approvedAt;

}
