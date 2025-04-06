import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableplansComponent } from './availableplans.component';

describe('AvailableplansComponent', () => {
  let component: AvailableplansComponent;
  let fixture: ComponentFixture<AvailableplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableplansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
