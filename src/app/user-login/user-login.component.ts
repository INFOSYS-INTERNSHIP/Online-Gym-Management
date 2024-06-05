import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { UserHomeComponent } from '../user-home-page/user-home-page.component';
import { ResetComponent } from '../reset/reset.component';
RouterModule

@Component({
  selector: 'app-user-login',
  imports: [ UserHomeComponent, ResetComponent],
  standalone:true,
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private router: Router) { }

  onSubmit() {
    // Perform login logic here (e.g., validate credentials)
    
    // If login is successful, navigate to user home
    
    this.router.navigate(['/userHome']);
  }

  register(){
    this.router.navigate(['/registration']);
  }

  reset(){
    this.router.navigate(['/reset']);
  }
}
