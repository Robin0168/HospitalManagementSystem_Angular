import { PatientDiagnosisHistoryService } from 'src/app/service/patient-diagnosis-history.service';
import { Component, OnInit } from '@angular/core';
import { PatientDiagnosisHistory } from 'src/app/model/patientDiagnosisHistory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {

  constructor(public patientDiagnosisHistoryService: PatientDiagnosisHistoryService, private router:Router) { }


ngOnInit(): void {
  this.getAll();
}


    delete(id: any) {
      console.log('--------------------Delete-----------------');
      
      this.patientDiagnosisHistoryService.deleteByID(id).subscribe(v => {
        alert("Data Deleted!");
        this.getAll();
      })
    }


 

    patientDiagnosisHistoryList: PatientDiagnosisHistory[] = [];

  getAll() {
    this.patientDiagnosisHistoryService.getAll().subscribe((res: any) => {
      this.patientDiagnosisHistoryList = res;
    })
  }



}













 

















  


































