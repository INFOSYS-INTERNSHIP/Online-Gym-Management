import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from '../admin-home-page/admin-home-page.component';
import { AdminLoginRoutingModule } from './admin-login-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminLoginRoutingModule,
    AdminHomeComponent
  ]
})
export class AdminLoginModule { }
