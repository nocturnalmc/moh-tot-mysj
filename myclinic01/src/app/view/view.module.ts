import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserMenuModule } from '../user-menu/user-menu.module';
import { UserMenuComponent } from '../user-menu/user-menu/user-menu.component';

const routes: Routes = [{ path: 'home', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    UserMenuModule,
  ],
})
export class ViewModule {}
