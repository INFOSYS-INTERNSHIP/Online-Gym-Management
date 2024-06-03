import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserHomeComponent } from '../user-home-page/user-home-page.component';

const routes: Routes = [
   
  {path: 'userHome', component: UserHomeComponent}// Define your routes here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLoginRoutingModule {
  
 }
