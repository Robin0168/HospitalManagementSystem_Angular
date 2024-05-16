import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePatientHistoryComponent } from './create-patient-history.component';

describe('CreatePatientHistoryComponent', () => {
  let component: CreatePatientHistoryComponent;
  let fixture: ComponentFixture<CreatePatientHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePatientHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePatientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
