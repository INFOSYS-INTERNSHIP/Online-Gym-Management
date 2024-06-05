// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-admin-login',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './admin-login.component.html',
//   styleUrl: './admin-login.component.css'
// })
// export class AdminLoginComponent {
//   constructor(private router: Router) { }

//   onSubmit() {
//     // Perform login logic here (e.g., validate credentials)
    
//     // If login is successful, navigate to user home
//     this.router.navigate(['./adminHome']);
//   }
// }

import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8080/api/auth/login', loginData, { responseType: 'text' }).subscribe(
      response => {
        console.log(response);
        // Navigate to admin home on successful login
        this.router.navigate(['./adminHome']);
      },
      error => {
        console.error('Login failed', error);
        alert('Invalid username or email/password');
      }
    );
  }
}
