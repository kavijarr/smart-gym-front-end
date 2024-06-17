import { Component } from '@angular/core';
import {HeaderComponent} from '../admincomponents/header/header.component'
import {SidebarComponent} from '../admincomponents/sidebar/sidebar.component'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coaches-registration',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent],
  templateUrl: './coaches-registration.component.html',
  styleUrl: './coaches-registration.component.css'
})
export class CoachesRegistrationComponent {
  selectedFile: File | null = null;
  onFileSelected(event: any){

}
}
