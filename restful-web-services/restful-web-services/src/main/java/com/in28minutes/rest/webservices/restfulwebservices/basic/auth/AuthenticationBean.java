package com.in28minutes.rest.webservices.restfulwebservices.basic.auth;

public class AuthenticationBean {
	
	private String message;

	//Constructor method
	public AuthenticationBean(String message) {
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