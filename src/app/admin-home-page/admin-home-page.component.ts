// import { Component,OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { NgForm } from '@angular/forms';


// @Component({
//   selector: 'app-admin-home',
//   // standalone: true,
//   templateUrl: './admin-home-page.component.html',
//   styleUrl: './admin-home-page.component.css',
 
// })
// export class AdminHomeComponent implements OnInit {
//   activeMembers: number = 120;  // Example data, replace with actual data retrieval logic
//   trainers: number = 5;        // Example data, replace with actual data retrieval logic
//   users: any[]=[];
//   showUserManagementSection = false;
//   showCreateUserForm = false;
//   showUpdateUserForm = false;
//   newUser = { username: '', email: '', password: '' };
//   updatedUser = { id: 0, username: '', email: '', password: '' };
//   selectedUserId: number = 0;
//   // selectedUserId: number;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getAllUsers();
//   }

//   showUserManagement() {
//     this.showUserManagementSection = true;
//   }

//   getAllUsers() {
//     this.http.get<any[]>('http://localhost:8080/api/admin/users').subscribe(
//       (response) => {
//         this.users = response;
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }

//   createUser() {
//     this.showCreateUserForm = true;
//   }

//   createUserFormSubmit() {
//     this.http.post('http://localhost:8080/api/admin/users/create', this.newUser).subscribe(
//       (response) => {
//         this.getAllUsers();
//         this.showCreateUserForm = false;
//         this.newUser = { username: '', email: '', password: '' }; // Reset the form
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }

//   updateUser(user: any) {
//     this.selectedUserId = user.id;
//     this.updatedUser = { ...user };
//     this.showUpdateUserForm = true;
//   }

//   updateUserFormSubmit() {
//     this.http.put(`http://localhost:8080/api/admin/users/update/${this.selectedUserId}`, this.updatedUser).subscribe(
//       (response) => {
//         this.getAllUsers();
//         this.showUpdateUserForm = false;
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }

//   deleteUser(userId: number) {
//     this.http.delete(`http://localhost:8080/api/admin/users/delete/${userId}`).subscribe(
//       (response) => {
//         this.getAllUsers();
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }
// }


// import { Component, OnInit, importProvidersFrom } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-admin-home',
//   standalone: true,
//   templateUrl: './admin-home-page.component.html',
//   styleUrls: ['./admin-home-page.component.css'],
//   imports: [FormsModule],  // Ensure FormsModule is included here
//   providers: [
//     importProvidersFrom(HttpClientModule, FormsModule)
//   ]
// })
// export class AdminHomeComponent implements OnInit {
//   activeMembers: number = 120;  // Example data, replace with actual data retrieval logic
//   trainers: number = 5;        // Example data, replace with actual data retrieval logic
//   users: any[] = [];
//   showUserManagementSection = false;
//   showCreateUserForm = false;
//   showUpdateUserForm = false;
//   newUser = { username: '', email: '', password: '' };
//   updatedUser = { id: 0, username: '', email: '', password: '' };
//   selectedUserId: number = 0;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getAllUsers();
//   }

//   showUserManagement() {
//     this.showUserManagementSection = true;
//   }

//   getAllUsers() {
//     this.http.get<any[]>('http://localhost:8080/api/admin/users').subscribe(
//       (response) => {
//         this.users = response;
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }

//   createUser() {
//     this.showCreateUserForm = true;
//   }

//   createUserFormSubmit() {
//     this.http.post('http://localhost:8080/api/admin/users/create', this.newUser).subscribe(
//       (response) => {
//         this.getAllUsers();
//         this.showCreateUserForm = false;
//         this.newUser = { username: '', email: '', password: '' }; // Reset the form
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }

//   updateUser(user: any) {
//     this.selectedUserId = user.id;
//     this.updatedUser = { ...user };
//     this.showUpdateUserForm = true;
//   }

//   updateUserFormSubmit() {
//     this.http.put(`http://localhost:8080/api/admin/users/update/${this.selectedUserId}`, this.updatedUser).subscribe(
//       (response) => {
//         this.getAllUsers();
//         this.showUpdateUserForm = false;
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }

//   deleteUser(userId: number) {
//     this.http.delete(`http://localhost:8080/api/admin/users/delete/${userId}`).subscribe(
//       (response) => {
//         this.getAllUsers();
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css'],
  imports: [HttpClientModule, FormsModule, CommonModule]  // Ensure CommonModule is included here
})
export class AdminHomeComponent implements OnInit {
  activeMembers: number = 120;  // Example data, replace with actual data retrieval logic
  // trainers: number = 5;        // Example data, replace with actual data retrieval logic
  users: any[] = [];
  showUserManagementSection = false;
  showCreateUserForm = false;
  showUpdateUserForm = false;
  newUser = { username: '', email: '', password: '' };
  updatedUser = { id: 0, username: '', email: '', password: '' };
  selectedUserId: number = 0;
  


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllSlots();
    this.getAllTrainers();
  }

  showUserManagement() {
    this.showUserManagementSection = true;
    this.showSlotManagementSection = false;
    this.showTrainerManagementSection = false;
  }

 
  getAllUsers() {
    this.http.get<any[]>('http://localhost:8080/api/admin/users').subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  createUser() {
    this.showCreateUserForm = true;
  }

  createUserFormSubmit() {
    this.http.post('http://localhost:8080/api/admin/users/create', this.newUser).subscribe(
      (response) => {
        this.getAllUsers();
        this.showCreateUserForm = false;
        this.newUser = { username: '', email: '', password: '' }; // Reset the form
      },
      (error) => {
        console.error(error);
      }
    );
  }
  cancelCreateUser() {
    this.showCreateUserForm = false;
    this.newUser = { username: '', email: '', password: '' };
  }

  updateUser(user: any) {
    this.selectedUserId = user.id;
    this.updatedUser = { ...user };
    this.showUpdateUserForm = true;
  }

  updateUserFormSubmit() {
    this.http.put(`http://localhost:8080/api/admin/users/update/${this.selectedUserId}`, this.updatedUser).subscribe(
      (response) => {
        this.getAllUsers();
        this.showUpdateUserForm = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteUser(userId: number) {
    this.http.delete(`http://localhost:8080/api/admin/users/delete/${userId}`).subscribe(
      (response) => {
        this.getAllUsers();
      },
      (error) => {
        console.error(error);
      }
    );
  }


  slots: any[] = [];
showSlotManagementSection = false;
newSlot = { startTime: '', endTime: '', availableSlots: 0 };

// Method to show slot management section
showSlotManagement() {
  this.showSlotManagementSection = true;
  this.showUserManagementSection = false;
  this.showTrainerManagementSection = false;
}

// Method to fetch all slots
getAllSlots() {
  this.http.get<any[]>('http://localhost:8080/api/admin/slots').subscribe(
    (response) => {
      this.slots = response;
    },
    (error) => {
      console.error(error);
    }
  );
}

// Method to create a new slot
createSlot() {
  this.http.post('http://localhost:8080/api/admin/slots', this.newSlot).subscribe(
    (response) => {
      console.log(response);
      this.getAllSlots(); // Refresh slots data after creating
      this.newSlot = { startTime: '', endTime: '', availableSlots: 0 }; // Reset form
    },
    (error) => {
      console.error(error);
    }
  );
}

// Method to update a slot
// updateSlot(slotId: number, updatedSlot: any) {
//   this.http.put(`http://localhost:8080/api/admin/slots/${slotId}`, updatedSlot).subscribe(
//     (response) => {
//       console.log(response);
//       // If the update is successful, you may want to refresh the list of slots
//       this.getAllSlots();
//     },
//     (error) => {
//       console.error(error);
//     }
//   );
// }
selectedSlotId: number = 0;
showUpdateSlotForm = false;
updatedSlot = { id: 0, startTime: '', endTime: '', availableSlots: 0 };
updateSlot(slot: any) {
  this.selectedSlotId = slot.id;
  this.updatedSlot = { ...slot };
  this.showUpdateSlotForm = true;
}

updateSlotFormSubmit() {
  this.http.put(`http://localhost:8080/api/admin/slots/${this.selectedSlotId}`, this.updatedSlot).subscribe(
    (response) => {
      console.log(response);
      // If the update is successful, you may want to refresh the list of slots
      this.getAllSlots();
    },
    (error) => {
      console.error(error);
    }
  );
}


// Method to delete a slot
deleteSlot(slotId: number) {
  this.http.delete(`http://localhost:8080/api/admin/slots/${slotId}`).subscribe(
    (response) => {
      console.log(response);
      this.getAllSlots(); // Refresh slots data after deletion
    },
    (error) => {
      console.error(error);
    }
  );
}

showTrainerManagementSection = false;

// Method to show trainer management section
showTrainerManagement() {
  this.showTrainerManagementSection = true;
  this.showUserManagementSection = false;
  this.showSlotManagementSection = false;
}

// Method to fetch all trainers
trainers: any[] = [];
selectedUser: any;
getAllTrainers() {
  this.http.get<any[]>('http://localhost:8080/api/admin/allTrainers').subscribe(
    (response) => {
      this.trainers = response;
    },
    (error) => {
      console.error(error);
    }
  );
}

// Method to assign a trainer to a user
assignTrainer(user: any, trainerId: number) {
  const request = { userId: user.id, trainerId: trainerId };
  this.http.post('http://localhost:8080/api/admin/assignTrainer', request).subscribe(
    (response) => {
      console.log(response);
      user.trainer = trainerId; // Update user's trainer in the UI
    },
    (error) => {
      console.error(error);
    }
  );
}
}
