import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffmembersComponent } from './staffmembers.component';

describe('StaffmembersComponent', () => {
  let component: StaffmembersComponent;
  let fixture: ComponentFixture<StaffmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffmembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
