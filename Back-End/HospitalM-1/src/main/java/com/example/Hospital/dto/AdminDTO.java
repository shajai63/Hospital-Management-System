package com.example.Hospital.dto;

public class AdminDTO {
	private int adminid;
	private String username;
	private String password;

	public AdminDTO(int adminid, String username, String password) {
		super();
		this.adminid = adminid;
		this.username = username;
		this.password = password;
	}

	public AdminDTO() {

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
		return "AdminDTO [adminid=" + adminid + ", username=" + username + ", password=" + password + "]";
	}

}
