package org.mysj.dto;

@lombok.Data
public class AppointmentDto {
    private String patientId;
    private String date;
    private String time;
    private String location;
}
