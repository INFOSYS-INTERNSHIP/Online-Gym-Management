import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-password',
  standalone:true,
  imports:[CommonModule, ReactiveFormsModule],
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  newPasswordForm!: FormGroup;

  constructor(private fb: FormBuilder , private router:Router) {}

  ngOnInit(): void {
    this.newPasswordForm = this.fb.group({
      
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required]
    }, { validator: this.passwordsMatch });
  }

  passwordsMatch(group: FormGroup): { [key: string]: boolean } | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmNewPassword = group.get('confirmNewPassword')?.value;
    return newPassword === confirmNewPassword ? null : { 'mismatch': true };
  }

  onSubmit() {
    if (this.newPasswordForm.valid) {
      alert('Your password has been successfully reset. Please login with your new password.');
      this.newPasswordForm.reset();
      this.router.navigate(['userLogin']);
    } else if (this.newPasswordForm.errors?.['mismatch']) {
      alert('Passwords Do Not Match');
      this.newPasswordForm.reset();
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
