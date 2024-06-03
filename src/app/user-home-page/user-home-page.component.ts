import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  standalone:true,
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomeComponent {
  constructor(private router: Router) { }

  bookSlot() {
    this.router.navigate(['/slotBooking']);
  }

  getFreeTrial() {
    // Logic to get a free trial
    console.log('Get a Free Trial button clicked');
  }

  viewSchedule() {
    // Logic to view the schedule
    console.log('View Full Schedule button clicked');
  }

  viewPlans() {
    // Logic to view all membership plans
    console.log('View All Plans button clicked');
  }

  viewGallery() {
    // Logic to view the gallery
    console.log('View Gallery button clicked');
  }

  viewVirtualTour() {
    // Logic to view the virtual tour
    console.log('Virtual Tour button clicked');
  }

  purchasePlan() {
    // Show an alert message
    alert('Thank you for your interest! Please proceed to complete your purchase.');
    this.router.navigate(['/purchase']);
  }

  contactUs(nameField: HTMLInputElement, emailField: HTMLInputElement) {
    // Show an alert message
    alert('Thank you for contacting us! We will get back to you shortly.');
    // Reset the text fields
    nameField.value = '';
    emailField.value = '';
  }
}
