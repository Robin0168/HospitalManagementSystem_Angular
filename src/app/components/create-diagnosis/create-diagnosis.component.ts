import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientDiagnosisHistoryService } from 'src/app/service/patient-diagnosis-history.service';

@Component({
  selector: 'app-create-diagnosis',
  templateUrl: './create-diagnosis.component.html',
  styleUrls: ['./create-diagnosis.component.scss']
})
export class CreateDiagnosisComponent implements OnInit {
  ngOnInit(): void {
   
  }
  constructor(public patientDiagnosisHistoryService: PatientDiagnosisHistoryService, private router: Router) { }

  patientDiagnosisHistoryForm: FormGroup = new FormGroup({
    patient_ID: new FormControl(''),
    status: new FormControl(''),
    diagnosisDate: new FormControl(''),
    diagnosisDetails: new FormControl(''),
    diagnosisCode: new FormControl(''),
    diagnosisResult: new FormControl(''),

  });

    onSubmit() {
    console.log(this.patientDiagnosisHistoryForm.value);
    this.patientDiagnosisHistoryService.addData(this.patientDiagnosisHistoryForm.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/followups');
    });
  }


}






























