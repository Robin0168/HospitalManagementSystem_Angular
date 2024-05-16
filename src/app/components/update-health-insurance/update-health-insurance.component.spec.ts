import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHealthInsuranceComponent } from './update-health-insurance.component';

describe('UpdateHealthInsuranceComponent', () => {
  let component: UpdateHealthInsuranceComponent;
  let fixture: ComponentFixture<UpdateHealthInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHealthInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHealthInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
