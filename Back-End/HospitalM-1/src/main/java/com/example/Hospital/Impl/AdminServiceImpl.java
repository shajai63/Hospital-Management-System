package com.example.Hospital.Impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Hospital.dto.AdminDTO;
import com.example.Hospital.dto.LoginDTO;
import com.example.Hospital.entity.Admin;
import com.example.Hospital.repo.AdminRepo;
import com.example.Hospital.response.LoginResponse;
import com.example.Hospital.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addadmin(AdminDTO adminDTO) {
        Admin admin = new Admin(
            adminDTO.getAdminid(),
            adminDTO.getUsername(),
            passwordEncoder.encode(adminDTO.getPassword())
        );

        adminRepo.save(admin);

        return admin.getUsername();
    }
    
    @Override
    public LoginResponse  loginAdmin(LoginDTO loginDTO) {
        String msg = "";
        Admin admin = adminRepo.findByUsername(loginDTO.getUsername());
        if (admin != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = admin.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Admin> admin1 = adminRepo.findByUsernameAndPassword(loginDTO.getUsername(), encodedPassword);
                if (admin1.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {

                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Username not exits", false);
        }


    }

}
