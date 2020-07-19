package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList();
	private static long idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "in28minutes", "Learn to Dance", new Date() ,false ));
		todos.add(new Todo(++idCounter, "in28minutes", "Learn to Sing", new Date() ,false ));
		todos.add(new Todo(++idCounter, "in28minutes", "Learn to Code", new Date() ,false ));
	}
	
	public List<Todo> findAll() {
		return todos;
	}

}
