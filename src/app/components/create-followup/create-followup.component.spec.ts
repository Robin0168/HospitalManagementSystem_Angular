import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFollowupComponent } from './create-followup.component';

describe('CreateFollowupComponent', () => {
  let component: CreateFollowupComponent;
  let fixture: ComponentFixture<CreateFollowupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFollowupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
