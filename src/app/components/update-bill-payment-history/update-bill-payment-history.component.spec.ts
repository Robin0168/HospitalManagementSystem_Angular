import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBillPaymentHistoryComponent } from './update-bill-payment-history.component';

describe('UpdateBillPaymentHistoryComponent', () => {
  let component: UpdateBillPaymentHistoryComponent;
  let fixture: ComponentFixture<UpdateBillPaymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBillPaymentHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBillPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
