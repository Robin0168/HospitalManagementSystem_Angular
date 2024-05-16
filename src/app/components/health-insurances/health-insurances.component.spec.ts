import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthInsurancesComponent } from './health-insurances.component';

describe('HealthInsurancesComponent', () => {
  let component: HealthInsurancesComponent;
  let fixture: ComponentFixture<HealthInsurancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthInsurancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthInsurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
