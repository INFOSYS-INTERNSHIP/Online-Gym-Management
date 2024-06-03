import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomePageRoutingModule } from './user-home-page-routing.module';
import { SlotBookingComponent } from '../slot-booking/slot-booking.component';
import { PurchaseComponent } from '../purchase/purchase.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserHomePageRoutingModule,
    SlotBookingComponent,
    PurchaseComponent

  ]
})
export class UserHomePageModule { }
