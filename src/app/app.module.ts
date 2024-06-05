import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomeComponent } from './user-home-page/user-home-page.component';
import { SlotBookingComponent } from './slot-booking/slot-booking.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // AppComponent,
    // UserLoginComponent,
    // UserHomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  // bootstrap: [AppComponent],
})
export class AppModule { }
