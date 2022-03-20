package com.company;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;


@ManagedBean(name = "mainPage")
@SessionScoped
public class MainPage {

	private String sal = "holaaa";

	public String getSal() {
		return sal;
	}

	public void setSal(String sal) {
		this.sal = sal;
	}
}
