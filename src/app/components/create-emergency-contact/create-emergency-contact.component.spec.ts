import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmergencyContactComponent } from './create-emergency-contact.component';

describe('CreateEmergencyContactComponent', () => {
  let component: CreateEmergencyContactComponent;
  let fixture: ComponentFixture<CreateEmergencyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmergencyContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmergencyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
