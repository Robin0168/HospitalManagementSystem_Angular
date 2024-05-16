import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedstatusComponent } from './bedstatus.component';

describe('BedstatusComponent', () => {
  let component: BedstatusComponent;
  let fixture: ComponentFixture<BedstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
