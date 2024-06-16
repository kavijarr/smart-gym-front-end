import { Component } from '@angular/core';
import {HeaderComponent} from '../admincomponents/header/header.component'
import {SidebarComponent} from '../admincomponents/sidebar/sidebar.component'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink,HeaderComponent,SidebarComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
