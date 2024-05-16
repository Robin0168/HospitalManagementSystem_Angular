import { TestBed } from '@angular/core/testing';

import { PatientFollowupHistoryService } from './patient-followup-history.service';

describe('PatientFollowupHistoryService', () => {
  let service: PatientFollowupHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientFollowupHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
