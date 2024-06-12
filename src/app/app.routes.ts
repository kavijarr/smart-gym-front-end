import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
export const routes: Routes = [
  {
    path:"",
    component:HomeComponentComponent
  },
  {
    path:"signin",
    component:SignInComponent
  }
];
