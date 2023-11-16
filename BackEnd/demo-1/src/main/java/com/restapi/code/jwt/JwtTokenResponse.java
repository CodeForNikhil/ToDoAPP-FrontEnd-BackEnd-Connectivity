package com.restapi.code.jwt;

import java.util.Objects;

public class JwtTokenResponse {

    private String token;

    public JwtTokenResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }
    
    @Override
    public String toString() {
        return "token:" + token;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        JwtTokenResponse that = (JwtTokenResponse) o;
        return Objects.equals(token, that.token);
    }

    @Override
    public int hashCode() {
        return Objects.hash(token);
    }
}
