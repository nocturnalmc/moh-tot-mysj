import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
import { AppointmentRecordsComponent } from './appointment-records/appointment-records.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent,
    children: [
      {
        path: 'appointment-records',
        component: AppointmentRecordsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {}
