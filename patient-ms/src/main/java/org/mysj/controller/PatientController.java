package org.mysj.controller;

import org.mysj.service.PatientService;
import org.springframework.web.bind.annotation.*;
import org.mysj.domain.PatientEntity;
import org.mysj.domain.PatientRepo;
import org.mysj.dto.PatientDto;

@RestController
public class PatientController {

    private final PatientRepo patientRepo;
    private final PatientService patientService;

    public PatientController(PatientRepo patientRepo , PatientService patientService) {
        this.patientRepo = patientRepo;
        this.patientService = patientService;
    }

    @PostMapping("/patient")
    public Long createPatient(@RequestBody PatientDto patientDto) {
        return patientService.createPatient(patientDto);
    }


    @GetMapping("/patient/{id}")
    public PatientDto getPatient(@PathVariable("id") Long id){
        return patientService.getPatient(id);
    }

    @DeleteMapping("/patient/{id}")
    public void deletePatient(@PathVariable("id") Long id) {
        patientService.deletePatient(id);
    }

    @PostMapping("/patient/{id}")
    public PatientEntity updatePatient(@PathVariable("id") Long id,
                                       @RequestBody PatientDto patient) {
        return patientService.updatePatient(id, patient);
    }

    @GetMapping("/patient")
    public PatientDto searchPatientByPatientId(
            @RequestParam("patientId") String patientId) {

        return patientService.searchPatient(patientId);
    }
}
