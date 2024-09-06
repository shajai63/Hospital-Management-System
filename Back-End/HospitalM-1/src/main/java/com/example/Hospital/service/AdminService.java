package com.example.Hospital.service;

import com.example.Hospital.dto.AdminDTO;
import com.example.Hospital.dto.LoginDTO;
import com.example.Hospital.response.LoginResponse;

public interface AdminService {
	String addadmin(AdminDTO adminDTO);

	LoginResponse loginAdmin(LoginDTO loginDTO);
}
