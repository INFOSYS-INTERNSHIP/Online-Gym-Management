import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login.component'; // Ensure you have this component
import { UserLoginRoutingModule } from './user-login-routing.module';
import { UserHomeComponent } from '../user-home-page/user-home-page.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserLoginRoutingModule,
    UserHomeComponent
  ]
})
export class UserLoginModule { }
