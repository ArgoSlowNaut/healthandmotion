import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component'; 
import { StaffmembersComponent } from './staffmembers/staffmembers.component';
import { AvailableplansComponent } from "./availableplans/availableplans.component";
import {LocationinfoComponent} from "./locationinfo/locationinfo.component"; 
import {CollageComponent} from "./collage/collage.component"; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CollageComponent, HeaderComponent, HeroComponent, AvailableplansComponent, StaffmembersComponent, LocationinfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'healthandmotion';
}
