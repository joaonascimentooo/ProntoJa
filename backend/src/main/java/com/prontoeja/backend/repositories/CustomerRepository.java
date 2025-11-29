package com.prontoeja.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prontoeja.backend.models.Customer;

public interface CustomerRepository extends JpaRepository<Customer, String> {
    
}
