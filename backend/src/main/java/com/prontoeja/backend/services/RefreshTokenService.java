package com.prontoeja.backend.services;

import java.time.Instant;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.prontoeja.backend.config.JwtProperties;
import com.prontoeja.backend.models.Customer;
import com.prontoeja.backend.models.RefreshToken;
import com.prontoeja.backend.repositories.RefreshTokenRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RefreshTokenService {

    private final RefreshTokenRepository refreshTokenRepository;
    private final JwtProperties jwtProperties;

    public RefreshToken createRefreshToken(Customer customer) {
        RefreshToken refreshToken = RefreshToken.builder()
                .customer(customer)
                .token(UUID.randomUUID().toString())
                .expiryDate(Instant.now().plusMillis(jwtProperties.getRefreshExpiration()))
                .build();

        return refreshTokenRepository.save(refreshToken);
    }

    public RefreshToken verifyExpiration(RefreshToken token) {
        if (token.getExpiryDate().compareTo(Instant.now()) < 0) {
            refreshTokenRepository.delete(token);
            throw new RuntimeException("Refresh token expired. Please login again.");
        }
        return token;
    }

    public RefreshToken findByToken(String token) {
        return refreshTokenRepository.findByToken(token)
                .orElseThrow(() -> new RuntimeException("Refresh token not found"));
    }

    @Transactional
    public void deleteByCustomer(Customer customer) {
        refreshTokenRepository.deleteByCustomer(customer);
    }
}
