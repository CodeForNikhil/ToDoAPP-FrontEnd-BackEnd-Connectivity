package com.restapi.code.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.restapi.code.bean.ToDo;
import com.restapi.code.repository.ToDoRepository;
import com.restapi.code.service.ToDoService;

@RestController
public class ToDoJpaResource {

	@Autowired
	ToDoService todoService;
	
	@Autowired
	ToDoRepository todoRepository;

	@GetMapping("/users/{username}/todo")
	public List<ToDo> retrieveTodo(@PathVariable String username) {
		return todoRepository.findByUsername(username);
	}

	@GetMapping("/users/{username}/todo/{id}")
	public ToDo retrieveSingleTodo(@PathVariable String username, @PathVariable int id) {
		return todoRepository.findById(id).get();
	}

	@DeleteMapping("/users/{username}/todo/{id}")
	public ResponseEntity<Void> deleteTodoById(@PathVariable int id) {
		todoRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}

	@PutMapping("/users/{username}/todo/{id}")
	public ToDo updateTodo(@PathVariable String username, @PathVariable int id,@RequestBody ToDo todo) {
		todoRepository.save(todo);
		return todo;
	}
	
	@PostMapping("/users/{username}/todo")
	public ToDo createTodo(@PathVariable String username,@RequestBody ToDo todo) {
		todo.setUsername(username);
		todo.setId(null);
		return todoRepository.save(todo);
		
	}
}
