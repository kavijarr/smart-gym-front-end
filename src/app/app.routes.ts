import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
export const routes: Routes = [
  {
    path:"",
    component:HomeComponentComponent
  },
  {
    path:"admin",
    component:AdminDashboardComponent
  }
];
