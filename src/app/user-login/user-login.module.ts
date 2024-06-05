import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login.component'; // Ensure you have this component
import { UserLoginRoutingModule } from './user-login-routing.module';
import { UserHomeComponent } from '../user-home-page/user-home-page.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ResetComponent } from '../reset/reset.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    UserLoginRoutingModule,
    UserHomeComponent,
    RegistrationComponent,
    ResetComponent
  ]
})
export class UserLoginModule { }
