package org.mysj.service;

import org.mysj.dto.AppointmentDto;
import org.springframework.stereotype.Service;

public interface AppointmentService {
    void createAppointment(AppointmentDto appointment);
}
