package com.restapi.code.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restapi.code.bean.ToDo;

public interface ToDoRepository extends JpaRepository<ToDo, Integer>{
	List<ToDo>findByUsername(String username);
}
