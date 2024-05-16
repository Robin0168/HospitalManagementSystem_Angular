import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHealthInsuranceComponent } from './create-health-insurance.component';

describe('CreateHealthInsuranceComponent', () => {
  let component: CreateHealthInsuranceComponent;
  let fixture: ComponentFixture<CreateHealthInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHealthInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHealthInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
