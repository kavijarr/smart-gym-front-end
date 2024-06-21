import { Component } from '@angular/core';
import { HeaderComponent } from '../admincomponents/header/header.component';
import { SidebarComponent } from '../admincomponents/sidebar/sidebar.component';

@Component({
  selector: 'app-admin-registration',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent],
  templateUrl: './admin-registration.component.html',
  styleUrl: './admin-registration.component.css'
})
export class AdminRegistrationComponent {
  selectedFile: File | null = null;
  onFileSelected(event: any){

  }
}
