package org.mysj.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

@lombok.Data
@lombok.NoArgsConstructor
@lombok.AllArgsConstructor
public class PatientDto {
    private String patientId;
    private String name;
    private int age;
    private String contactNo;
    @Email
    @NotNull
    private String email;
}
