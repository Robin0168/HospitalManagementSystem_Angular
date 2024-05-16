import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPaymentHistoryComponent } from './bill-payment-history.component';

describe('BillPaymentHistoryComponent', () => {
  let component: BillPaymentHistoryComponent;
  let fixture: ComponentFixture<BillPaymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillPaymentHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
