package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity

public class Bus {
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private int age;
	private String travelsname;
	private String date;
	private String boardingpoint;
	private String endingpoint;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getTravelsname() {
		return travelsname;
	}
	public void setTravelsname(String travelsname) {
		this.travelsname = travelsname;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getBoardingpoint() {
		return boardingpoint;
	}
	public void setBoardingpoint(String boardingpoint) {
		this.boardingpoint = boardingpoint;
	}
	public String getEndingpoint() {
		return endingpoint;
	}
	public void setEndingpoint(String endingpoint) {
		this.endingpoint = endingpoint;
	}
	@Override
	public String toString() {
		return "Bus [id=" + id + ", name=" + name + ", age=" + age + ", travelsname=" + travelsname + ", date=" + date
				+ ", boardingpoint=" + boardingpoint + ", endingpoint=" + endingpoint + "]";
	}
	
	
	
	

}
