// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { WelcomeComponent } from './welcome/welcome.component';

// const routes: Routes = [
//   { path: '', component: WelcomeComponent },
//   // Add other routes as needed
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then((m) => m.ViewModule),
  },
  {
    path: 'appointments',
    loadChildren: () =>
      import('./appointments/appointments.module').then(
        (m) => m.AppointmentsModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
