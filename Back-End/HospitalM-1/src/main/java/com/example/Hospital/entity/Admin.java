package com.example.Hospital.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin {
	@Id
	@Column(name = "id", length = 45)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int adminid;
	
	public Admin() {
		
	}

	@Column(name = "user_name", length = 255)
	private String username;

	@Column(name = "password", length = 255)
	private String password;

	public Admin(int adminid, String username, String password) {
		super();
		this.adminid = adminid;
		this.username = username;
		this.password = password;
	}

	public int getAdminid() {
		return adminid;
	}

	public void setAdminid(int adminid) {
		this.adminid = adminid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Admin [adminid=" + adminid + ", username=" + username + ", password=" + password + "]";
	}

}
