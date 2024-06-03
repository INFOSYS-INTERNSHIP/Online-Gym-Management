import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminHomeComponent } from './admin-home-page/admin-home-page.component';
import { UserHomeComponent } from './user-home-page/user-home-page.component';
import { Router } from '@angular/router';
import { SlotBookingComponent } from './slot-booking/slot-booking.component';
import { PurchaseComponent } from './purchase/purchase.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , AdminLoginComponent,UserLoginComponent , AdminHomeComponent , UserHomeComponent,SlotBookingComponent,PurchaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shashwat';
  constructor(private router: Router) {}
  navigateToUserLogin() {
    this.router.navigate(['/userLogin']);
  }
  navigateToAdminLogin(){
    this.router.navigate(['/adminLogin']);
  }
}
