package com.example.Hospital.Impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Hospital.entity.Patient;
import com.example.Hospital.repo.PatientRepo;
import com.example.Hospital.service.PatientService;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepo patientRepo;

    @Override
    public Patient addPatient(Patient patient) {
        return patientRepo.save(patient);
    }

    @Override
    public Patient updatePatient(Patient patient) {
        Optional<Patient> existingPatient = patientRepo.findById(patient.getId());
        if (existingPatient.isPresent()) {
            Patient updatedPatient = existingPatient.get();
            updatedPatient.setName(patient.getName());
            updatedPatient.setAge(patient.getAge());
            updatedPatient.setGender(patient.getGender());
            updatedPatient.setContact(patient.getContact());
            updatedPatient.setMedicalHistory(patient.getMedicalHistory());
            return patientRepo.save(updatedPatient);
        } else {
            throw new RuntimeException("Patient not found with id: " + patient.getId());
        }
    }

    @Override
    public void deletePatient(Long id) {
        patientRepo.deleteById(id);
    }

    @Override
    public List<Patient> getAllPatients() {
        return patientRepo.findAll();
    }

    @Override
    public Patient getPatientById(Long id) {
        return patientRepo.findById(id).orElse(null);
    }
}