import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home-page.component';
import { SlotBookingComponent } from '../slot-booking/slot-booking.component';
import { PurchaseComponent } from '../purchase/purchase.component';

const routes: Routes = [
  { path: 'userHome', component: UserHomeComponent },
  { path: 'slotBooking', component: SlotBookingComponent },
  { path: 'purchase', component: PurchaseComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomePageRoutingModule { }
