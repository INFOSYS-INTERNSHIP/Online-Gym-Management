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
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // AppComponent,
    // UserLoginComponent,
    // UserHomeComponent,
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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [],
  // bootstrap: [AppComponent],
})
export class AppModule { }
