package com.example.Hospital.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.Hospital.entity.Patient;

@Repository
public interface PatientRepo extends JpaRepository<Patient, Long> {
}
