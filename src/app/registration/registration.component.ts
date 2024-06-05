import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
Router

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']  // Corrected property name
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder , private router:Router) { }
  

  ngOnInit(): void {
    this.registrationForm = this.fb.group({  // Use `fb` instead of `formBuilder`
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
     
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    }, );
  }
  

  onSubmit() {
    if (this.registrationForm.valid) {
      alert('Thank you for Registering! Please check your email to verify your account.');
      this.registrationForm.reset();
    } else {
      alert('Please fill in all required fields.');
    }
    
    this.router.navigate(['/userLogin']);
  }

 
}
