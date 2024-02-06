package org.mysj.service;

import org.mysj.domain.PatientEntity;
import org.mysj.dto.PatientDto;

public interface PatientService {
    Long createPatient(PatientDto patient);

    PatientDto getPatient(Long id);

    void deletePatient(Long id);

    PatientEntity updatePatient(Long id, PatientDto patient);

    PatientDto searchPatient(String patientId);
}
