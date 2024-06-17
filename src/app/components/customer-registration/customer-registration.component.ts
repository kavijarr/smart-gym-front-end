import { Component } from '@angular/core';
import {HeaderComponent} from '../admincomponents/header/header.component'
import {SidebarComponent} from '../admincomponents/sidebar/sidebar.component'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-customer-registration',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent],
  templateUrl: './customer-registration.component.html',
  styleUrl: './customer-registration.component.css'
})
export class CustomerRegistrationComponent {
  selectedFile: File | null = null;
  onFileSelected(event: any){

  }
}
