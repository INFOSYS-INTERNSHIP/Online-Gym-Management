import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  resetPasswordForm!: FormGroup;

  constructor(private fb: FormBuilder , private router:Router) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
     
    }, );
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      alert('Please Check Your Email');
      this.resetPasswordForm.reset();
      this.router.navigate(['/newPass']);
    } else {
      alert('Please fill in all required fields.');
    }
  }


}
