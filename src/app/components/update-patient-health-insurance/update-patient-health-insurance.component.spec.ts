import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientHealthInsuranceComponent } from './update-patient-health-insurance.component';

describe('UpdatePatientHealthInsuranceComponent', () => {
  let component: UpdatePatientHealthInsuranceComponent;
  let fixture: ComponentFixture<UpdatePatientHealthInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePatientHealthInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePatientHealthInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
