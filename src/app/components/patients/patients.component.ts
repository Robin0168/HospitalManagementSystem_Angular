import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})

export class PatientsComponent implements OnInit {

    constructor(public patientService: PatientService) { }


    delete(id: any) {
      console.log('--------------------Delete-----------------');
      
      this.patientService.deleteByID(id).subscribe(v => {
        alert("Data Deleted!");
        this.getAll();
      })
    }

  edit(patient: Patient) {
  }
 
     ngOnInit(): void {
    this.getAll();
  }

 patientList: Patient[] = [];

  getAll() {
    this.patientService.getAll().subscribe((res: any) => {
      this.patientList = res;
    })
  }

}

























