import { Routes } from '@angular/router';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserHomeComponent } from '../user-home-page/user-home-page.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

export const routes: Routes = [{path:'userLogin', component: UserLoginComponent},
{path:'userHome', component: UserHomeComponent},
{path:'adminLogin', component: AdminLoginComponent}
];
