import { Component } from '@angular/core';


@Component({
  selector: 'app-admin-home',
  standalone: true,
  templateUrl: './admin-home-page.component.html',
  styleUrl: './admin-home-page.component.css'
})
export class AdminHomeComponent {
  activeMembers: number = 120;  // Example data, replace with actual data retrieval logic
  trainers: number = 15;        // Example data, replace with actual data retrieval logic


}
