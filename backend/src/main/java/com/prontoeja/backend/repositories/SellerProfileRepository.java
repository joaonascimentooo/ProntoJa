package com.prontoeja.backend.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prontoeja.backend.models.SellerProfile;

@Repository
public interface SellerProfileRepository extends JpaRepository<SellerProfile, String> {
    
    Optional<SellerProfile> findByCustomerId(String customerId);
    
}
