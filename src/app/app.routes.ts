import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomeComponent } from './user-home-page/user-home-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home-page/admin-home-page.component';
import { SlotBookingComponent } from './slot-booking/slot-booking.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetComponent } from './reset/reset.component';
import { NewPasswordComponent } from './new-password/new-password.component';



export const routes: Routes = [{path:'userLogin', component: UserLoginComponent},
{path:'userHome', component: UserHomeComponent},
{path:'adminLogin', component: AdminLoginComponent},
{ path: 'adminHome', component: AdminHomeComponent }, 
 { path: 'slotBooking', component: SlotBookingComponent },
{path:'purchase',component:PurchaseComponent},
{path: 'registration', component: RegistrationComponent},
{path:'reset', component:ResetComponent},
{ path: 'newPass', component: NewPasswordComponent },

];
