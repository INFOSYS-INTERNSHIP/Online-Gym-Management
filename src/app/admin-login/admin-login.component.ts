import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  constructor(private router: Router) { }

  onSubmit() {
    // Perform login logic here (e.g., validate credentials)
    
    // If login is successful, navigate to user home
    this.router.navigate(['./adminHome']);
  }
}
