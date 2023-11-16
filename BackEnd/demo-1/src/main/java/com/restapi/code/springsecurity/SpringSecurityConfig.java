package com.restapi.code.springsecurity;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

//@Configuration
public class SpringSecurityConfig {
	// filter chain

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity sec) throws Exception {

		// authenticate all request 
		//Request to preflight request does not pass access control check, so matchers need to permit all.
		sec.authorizeHttpRequests(
				auth -> auth.antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest().authenticated());

		// basic authentication
		sec.httpBasic(Customizer.withDefaults());

		// stateless rest api -> required when we disable csrf.
		sec.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

		// disable csrf
		sec.csrf(csrf -> csrf.disable());

		return sec.build();
	}
}
