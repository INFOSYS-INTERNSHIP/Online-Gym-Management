import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserHomeComponent } from './user-home-page/user-home-page.component';
import { AdminHomeComponent } from './admin-home-page/admin-home-page.component';
import { SlotBookingComponent } from './slot-booking/slot-booking.component';
 
const routes: Routes = [
  { path: 'userLogin', component: UserLoginComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'userHome', component: UserHomeComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'slotBooking', component: SlotBookingComponent },
  // Add route for AdminHomeComponent
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
