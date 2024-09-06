package com.example.Hospital.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Hospital.dto.AdminDTO;
import com.example.Hospital.dto.LoginDTO;
import com.example.Hospital.response.LoginResponse;
import com.example.Hospital.service.AdminService;

@RestController
@CrossOrigin
@RequestMapping("api/v1/admin")
public class AdminController {
	
	@Autowired
    private AdminService adminService;

	@PostMapping(path = "/save")
	public String saveAdmin(@RequestBody AdminDTO adminDTO) {
		String id = adminService.addadmin(adminDTO);
		return id;
	}
	
	@PostMapping(path = "/login")
    public ResponseEntity<?> loginAdmin(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = adminService.loginAdmin(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
	
}
