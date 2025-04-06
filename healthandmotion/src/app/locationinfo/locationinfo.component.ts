import { Component } from '@angular/core';

@Component({
  selector: 'app-locationinfo',
  templateUrl: './locationinfo.component.html',
})
export class LocationinfoComponent {
  workingHours = [
    { day: 'Monday – Friday', hours: '6:00 AM – 10:00 PM' },
    { day: 'Saturday', hours: '8:00 AM – 8:00 PM' },
    { day: 'Sunday', hours: '9:00 AM – 6:00 PM' },
  ];
}