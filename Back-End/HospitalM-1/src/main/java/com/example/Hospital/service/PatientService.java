package com.example.Hospital.service;

import java.util.List;
import com.example.Hospital.entity.Patient;

public interface PatientService {
	Patient addPatient(Patient patient);

	Patient updatePatient(Patient patient);

	void deletePatient(Long id);

	List<Patient> getAllPatients();

	Patient getPatientById(Long id);
}