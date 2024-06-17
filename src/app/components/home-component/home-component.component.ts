import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PackagesComponent } from '../packages/packages.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [NavbarComponent,PackagesComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
