import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetComponent } from './reset.component';
import { NewPasswordComponent } from '../new-password/new-password.component';



const routes: Routes = [
  {path:'reset', component:ResetComponent},
  { path: 'newPass', component: NewPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetRoutingModule { }
