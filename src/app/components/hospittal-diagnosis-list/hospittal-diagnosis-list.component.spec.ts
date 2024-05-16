import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospittalDiagnosisListComponent } from './hospittal-diagnosis-list.component';

describe('HospittalDiagnosisListComponent', () => {
  let component: HospittalDiagnosisListComponent;
  let fixture: ComponentFixture<HospittalDiagnosisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospittalDiagnosisListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospittalDiagnosisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
