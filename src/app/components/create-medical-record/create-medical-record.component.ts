import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalRecordService } from 'src/app/service/medical-record.service';

@Component({
  selector: 'app-create-medical-record',
  templateUrl: './create-medical-record.component.html',
  styleUrls: ['./create-medical-record.component.scss']
})
export class CreateMedicalRecordComponent implements OnInit {


  constructor(public medicalRecordService: MedicalRecordService, private router: Router) { }

  ngOnInit(): void {
  
  }

  medicalRecordForm: FormGroup = new FormGroup({
    patientId: new FormControl(''),
    doctorId: new FormControl(''),
    diagnosis: new FormControl(''),
    treatment: new FormControl(''),
    prescription: new FormControl(''),
    testResult: new FormControl(''),
      
    });

    onSubmit() {
      console.log(this.medicalRecordForm.value);
      this.medicalRecordService.addData(this.medicalRecordForm.value).subscribe((res: any) => {
        console.log('Post created successfully!')
        this.router.navigateByUrl('/medicalRecords');
      });
    }

}
