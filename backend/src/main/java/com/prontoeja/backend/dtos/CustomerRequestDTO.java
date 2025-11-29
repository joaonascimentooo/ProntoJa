package com.prontoeja.backend.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerRequestDTO {
    private String name;
    private String email;
    private String phoneNumber;
    private String password;
}
