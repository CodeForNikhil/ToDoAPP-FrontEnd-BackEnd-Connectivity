package com.restapi.code;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.restapi.code.jwt.JwtSecurityConfig;

@SpringBootApplication
@Import(JwtSecurityConfig.class)
public class Demo1Application {

	public static void main(String[] args) {
		SpringApplication.run(Demo1Application.class, args);
	}
}
