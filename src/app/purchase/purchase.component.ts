import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],  // Add ReactiveFormsModule here
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  membershipForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.membershipForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      membershipType: ['', Validators.required],
      payment:['',Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.membershipForm.valid) {
      alert('Thank you for purchasing a membership! We will contact you shortly.');
      this.membershipForm.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
