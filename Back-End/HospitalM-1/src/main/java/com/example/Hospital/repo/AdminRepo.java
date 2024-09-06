package com.example.Hospital.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.Hospital.entity.Admin;

@EnableJpaRepositories
@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer> {
	Optional<Admin> findByUsernameAndPassword(String username, String password);

    Admin findByUsername(String username);
}
