import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBillPaymentHistoryComponent } from './create-bill-payment-history.component';

describe('CreateBillPaymentHistoryComponent', () => {
  let component: CreateBillPaymentHistoryComponent;
  let fixture: ComponentFixture<CreateBillPaymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBillPaymentHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBillPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
