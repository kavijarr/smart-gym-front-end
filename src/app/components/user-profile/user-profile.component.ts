import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../admincomponents/sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [SidebarComponent,NavbarComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  selectedFile: File | null = null;
  onFileSelected(event: any){

}
}
