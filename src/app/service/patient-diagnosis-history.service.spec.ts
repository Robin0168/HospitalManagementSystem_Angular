import { TestBed } from '@angular/core/testing';

import { PatientDiagnosisHistoryService } from './patient-diagnosis-history.service';

describe('PatientDiagnosisHistoryService', () => {
  let service: PatientDiagnosisHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientDiagnosisHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
