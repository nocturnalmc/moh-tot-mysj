import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { AppointmentRecordsComponent } from './appointment-records/appointment-records.component';


@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentRecordsComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule
  ]
})
export class AppointmentsModule { }
