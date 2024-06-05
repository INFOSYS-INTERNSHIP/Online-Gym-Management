import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserHomeComponent } from '../user-home-page/user-home-page.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ResetComponent } from '../reset/reset.component';


const routes: Routes = [
   
  {path: 'userHome', component: UserHomeComponent},
  {path: 'registration', component: RegistrationComponent},// Define your routes here
  {path:'reset', component:ResetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLoginRoutingModule {
  
 }
