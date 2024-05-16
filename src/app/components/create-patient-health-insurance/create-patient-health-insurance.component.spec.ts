import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePatientHealthInsuranceComponent } from './create-patient-health-insurance.component';

describe('CreatePatientHealthInsuranceComponent', () => {
  let component: CreatePatientHealthInsuranceComponent;
  let fixture: ComponentFixture<CreatePatientHealthInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePatientHealthInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePatientHealthInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
