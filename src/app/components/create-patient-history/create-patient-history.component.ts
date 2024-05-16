import { PatientHistoryService } from './../../service/patient-history.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient-history',
  templateUrl: './create-patient-history.component.html',
  styleUrls: ['./create-patient-history.component.scss']
})
export class CreatePatientHistoryComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(public PatientHistoryService: PatientHistoryService, private router: Router) { }

  patientHistoryForm: FormGroup = new FormGroup({
    patientName: new FormControl(''),
    doctorName: new FormControl(''),
    treatment: new FormControl(''),
    dischargeDate: new FormControl(''),
    diagnosisResult: new FormControl(''),
    billAmount: new FormControl(''),
    billStatus: new FormControl('')

  });

  onSubmit() {
    console.log(this.patientHistoryForm.value);
    this.PatientHistoryService.addData(this.patientHistoryForm.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/medicalHistory');
    });
  }
}














































// @Component({
//   selector: 'app-create-patient-history',
//   templateUrl: './create-patient-history.component.html',
//   styleUrls: ['./create-patient-history.component.scss']
// })
// export class CreatePatientHistoryComponent implements OnInit {
//   ngOnInit(): void {

//   }
//   constructor(public PatientHistoryService: PatientHistoryService, private router: Router) { }
//   patientHistoryForm: FormGroup = new FormGroup({
//     patient_ID: new FormControl(''),
//     medicalHistory: new FormControl(''),
//     surgicalHistory: new FormControl(''),
//     date: new FormControl(''),
//     //time: new FormControl('')
//     purpose: new FormControl('')
//   });

//   onSubmit() {
//     console.log(this.patientHistoryForm.value);
//     this.PatientHistoryService.addData(this.patientHistoryForm.value).subscribe((res: any) => {
//       console.log('Post created successfully!')
//       this.router.navigateByUrl('/bill');
//     });
//   }
// }



























































