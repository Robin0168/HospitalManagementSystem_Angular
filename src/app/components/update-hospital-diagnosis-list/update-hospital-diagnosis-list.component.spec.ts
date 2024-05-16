import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHospitalDiagnosisListComponent } from './update-hospital-diagnosis-list.component';

describe('UpdateHospitalDiagnosisListComponent', () => {
  let component: UpdateHospitalDiagnosisListComponent;
  let fixture: ComponentFixture<UpdateHospitalDiagnosisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHospitalDiagnosisListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHospitalDiagnosisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
