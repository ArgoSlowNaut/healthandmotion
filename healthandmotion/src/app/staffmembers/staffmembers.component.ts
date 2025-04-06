import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staffmembers',
  imports: [CommonModule], 
  templateUrl: './staffmembers.component.html',
  styleUrls: ['./staffmembers.component.scss']
})
export class StaffmembersComponent {
  staffMembers = [
    { name: 'Alice Johnson',  photo: 'assets/staff.png' },
    { name: 'Bob Smith', photo: 'assets/staff.png'  },
    { name: 'Clara Davis',  photo: 'assets/staff.png'  },
  ];
}