import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomeComponent } from './user-home-page/user-home-page.component';
import { SlotBookingComponent } from './slot-booking/slot-booking.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetComponent } from './reset/reset.component';
import { NewPasswordComponent } from './new-password/new-password.component';

@NgModule({
  declarations: [
    // AppComponent,
    // UserLoginComponent,
    // UserHomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlotBookingComponent,
    PurchaseComponent,
    UserLoginComponent,
    RegistrationComponent,
    ResetComponent,
    NewPasswordComponent
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule { }
