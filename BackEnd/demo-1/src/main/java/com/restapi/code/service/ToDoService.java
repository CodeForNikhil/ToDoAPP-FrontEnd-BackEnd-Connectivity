package com.restapi.code.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.restapi.code.bean.ToDo;

@Service
public class ToDoService {

	private static List<ToDo> todos = new ArrayList<>();
	
	private static int cnt=0;
	
	static {
		todos.add(new ToDo(++cnt,"Nikhil", "Learn AWS", LocalDate.now().plusYears(1), false));
		todos.add(new ToDo(++cnt,"Nikhil", "Learn DevOps", LocalDate.now().plusMonths(3),false));
		todos.add(new ToDo(++cnt, "Nikhil", "Learn Spring & SpringBoot", LocalDate.now().plusDays(20),false));
	}
	
	public List<ToDo> findByUsername(String username){
		Predicate<? super ToDo> predicate = e -> e.getUsername().equalsIgnoreCase(username);
		return todos.stream().filter(predicate).collect(Collectors.toList());
	}
	
	public ToDo addToDo(String username, String description, LocalDate targetDate, boolean done) {
		ToDo todo = new ToDo(++cnt, username, description, targetDate, done);
		todos.add(todo);
		return todo;
	}
	
	public void deleteById(int id) {
		Predicate<? super ToDo> predicate = e -> e.getId() == id;
		todos.removeIf(predicate );
	}
	
	public ToDo findById(int id) {
		Predicate<? super ToDo> predicate=e -> e.getId() == id;
		ToDo todo = todos.stream().filter(predicate).findFirst().get();
		return todo;
	}
	
	public void updateToDo(ToDo todo) {
		deleteById(todo.getId());
		todos.add(todo);
	}
}
