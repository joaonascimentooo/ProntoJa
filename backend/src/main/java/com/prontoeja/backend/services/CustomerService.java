package com.prontoeja.backend.services;

import org.springframework.stereotype.Service;

import com.prontoeja.backend.repositories.CustomerRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;

}
