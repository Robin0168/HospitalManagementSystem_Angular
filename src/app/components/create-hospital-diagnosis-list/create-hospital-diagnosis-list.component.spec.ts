import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHospitalDiagnosisListComponent } from './create-hospital-diagnosis-list.component';

describe('CreateHospitalDiagnosisListComponent', () => {
  let component: CreateHospitalDiagnosisListComponent;
  let fixture: ComponentFixture<CreateHospitalDiagnosisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHospitalDiagnosisListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHospitalDiagnosisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
