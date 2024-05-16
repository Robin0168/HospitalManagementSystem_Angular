import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientHistoryComponent } from './update-patient-history.component';

describe('UpdatePatientHistoryComponent', () => {
  let component: UpdatePatientHistoryComponent;
  let fixture: ComponentFixture<UpdatePatientHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePatientHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePatientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
