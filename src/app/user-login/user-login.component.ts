import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  imports: [RouterOutlet],
  standalone:true,
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private router: Router) { }

  onSubmit() {
    // Perform login logic here (e.g., validate credentials)
    
    // If login is successful, navigate to user home
    this.router.navigate(['./userHome']);
  }
}
