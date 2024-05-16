import { PatientService } from 'src/app/service/patient.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { RestApiService } from 'src/app/service/rest-api.service';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-patients-appointment',
  templateUrl: './patients-appointment.component.html',
  styleUrls: ['./patients-appointment.component.scss']
})

export class PatientsAppointmentComponent implements OnInit {

  ngOnInit(): void {
this.doctorService.getAll().subscribe((res:any)=>{
  this.doctorList=res;
})
this.departmentService.getAll().subscribe((res:any)=>{
  this.departmentList=res;
})
  }

  doctorList!: any[];
  departmentList!: any[];

    constructor(public patientService: PatientService, private router: Router, private doctorService: RestApiService, private departmentService: DepartmentService ) { }
  

  patientForm: FormGroup = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    zipCode: new FormControl(''),
    country: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    emergencyContactPersonId: new FormControl(''),
     });

  onSubmit() {
    console.log(this.patientForm.value);
    this.patientService.addData(this.patientForm.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/patients');
    });
  }

  

}










 











