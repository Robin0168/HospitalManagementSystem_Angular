import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsAppointmentComponent } from './patients-appointment.component';

describe('PatientsAppointmentComponent', () => {
  let component: PatientsAppointmentComponent;
  let fixture: ComponentFixture<PatientsAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
