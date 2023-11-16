package com.restapi.code.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.restapi.code.bean.HelloWorldBean;

@RestController
public class HelloWorldController {

	
		@GetMapping(path="/basicauth")
		public String basicAuth() {
			return "Success from basic Auth";
		}
	
	
		@GetMapping(path="/hello-world")
		public String helloWorld() {
			return "Hello World";
		}
		
		@GetMapping(path="/hello-world-bean")
		public HelloWorldBean helloWorldBean() {
			return new HelloWorldBean("Hello World Bean");
		}
		
		@GetMapping(path="/hello-world/path-variable/{name}")
		public HelloWorldBean helloWorldBeanPathVariable(@PathVariable String name) {
			return new HelloWorldBean(String.format("Hello World %s", name));
		}
}