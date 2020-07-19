package com.in28minutes.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {
	
	private String message;

	//Constructor method
	public HelloWorldBean(String message) {
		this.message = message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	public String getMessage() {
			return message;
		}
	
	@Override
	public String toString() {
//		return "HelloWorldBean [message=" + message + "]";
		return String.format("HelloWorldBean [message=%s]", message);
	}

	
	

}
