import { TestBed } from '@angular/core/testing';

import { PatientAdmissionHistoryService } from './patiet-admission-history.service';

describe('PatietAdmissionHistoryService', () => {
  let service: PatientAdmissionHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientAdmissionHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
