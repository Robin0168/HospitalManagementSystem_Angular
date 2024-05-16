import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHealthInsurancesComponent } from './patient-health-insurances.component';

describe('PatientHealthInsurancesComponent', () => {
  let component: PatientHealthInsurancesComponent;
  let fixture: ComponentFixture<PatientHealthInsurancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHealthInsurancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientHealthInsurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
