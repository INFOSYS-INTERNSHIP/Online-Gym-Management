import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slot-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slot-booking.component.html',
  styleUrls: ['./slot-booking.component.css']
})

export class SlotBookingComponent {
  weekDays = [
    {
      name: 'Monday',
      slots: [
        { icon: 'fas fa-dumbbell', time: '9:00 AM - 10:00 AM', activity: 'Yoga', trainer: 'John Doe' },
        { icon: 'fas fa-running', time: '10:30 AM - 11:30 AM', activity: 'Cardio', trainer: 'Jane Smith' },
        { icon: 'fas fa-swimmer', time: '12:00 PM - 1:00 PM', activity: 'Swimming', trainer: 'Jim Brown' }
      ]
    },
    {
      name: 'Tuesday',
      slots: [
        { icon: 'fas fa-biking', time: '9:00 AM - 10:00 AM', activity: 'Cycling', trainer: 'Emily Clark' },
        { icon: 'fas fa-dumbbell', time: '10:30 AM - 11:30 AM', activity: 'Weight Training', trainer: 'Michael Johnson' },
        { icon: 'fas fa-running', time: '12:00 PM - 1:00 PM', activity: 'Running', trainer: 'Chris Lee' }
      ]
    },
    {
      name: 'Wednesday',
      slots: [
        { icon: 'fas fa-heartbeat', time: '9:00 AM - 10:00 AM', activity: 'HIIT', trainer: 'Emma Wilson' },
        { icon: 'fas fa-dumbbell', time: '10:30 AM - 11:30 AM', activity: 'CrossFit', trainer: 'Liam Martinez' },
        { icon: 'fas fa-biking', time: '12:00 PM - 1:00 PM', activity: 'Spinning', trainer: 'Olivia Davis' }
      ]
    },
    {
      name: 'Thursday',
      slots: [
        { icon: 'fas fa-running', time: '9:00 AM - 10:00 AM', activity: 'Jogging', trainer: 'William Garcia' },
        { icon: 'fas fa-dumbbell', time: '10:30 AM - 11:30 AM', activity: 'Bodybuilding', trainer: 'Sophia Martinez' },
        { icon: 'fas fa-swimmer', time: '12:00 PM - 1:00 PM', activity: 'Aqua Aerobics', trainer: 'Benjamin Hernandez' }
      ]
    },
    {
      name: 'Friday',
      slots: [
        { icon: 'fas fa-dumbbell', time: '9:00 AM - 10:00 AM', activity: 'Pilates', trainer: 'Charlotte Lopez' },
        { icon: 'fas fa-heartbeat', time: '10:30 AM - 11:30 AM', activity: 'Zumba', trainer: 'James Rodriguez' },
        { icon: 'fas fa-biking', time: '12:00 PM - 1:00 PM', activity: 'Mountain Biking', trainer: 'Amelia Thompson' }
      ]
    },
    {
      name: 'Saturday',
      slots: [
        { icon: 'fas fa-dumbbell', time: '9:00 AM - 10:00 AM', activity: 'Yoga', trainer: 'Isabella White' },
        { icon: 'fas fa-running', time: '10:30 AM - 11:30 AM', activity: 'Marathon Training', trainer: 'Lucas Martin' },
        { icon: 'fas fa-swimmer', time: '12:00 PM - 1:00 PM', activity: 'Diving', trainer: 'Mia Perez' }
      ]
    }
  ];

  bookSlot(dayName: string, slot: { icon: string, time: string, activity: string, trainer: string }) {
    const confirmationMessage = `Booking slot on ${dayName} at ${slot.time} for ${slot.activity} with ${slot.trainer}`;
    alert(confirmationMessage);
    // Implement further booking logic here, such as calling an API or updating state
  }
}
