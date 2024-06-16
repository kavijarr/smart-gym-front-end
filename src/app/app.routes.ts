import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { CoachesRegistrationComponent } from './components/coaches-registration/coaches-registration.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path:"",
    component:HomeComponentComponent
  },
  {

    path:"admin",
    component:AdminDashboardComponent
  },
  {
    path:"customer-reg",
    component:CustomerRegistrationComponent
  },
  {
    path:"coach-reg",
    component:CoachesRegistrationComponent
  },
  {
    path:"signin",
    component:SignInComponent

  }
];
