import { MedicalRecordService } from 'src/app/service/medical-record.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalRecord } from 'src/app/model/medicalRecord';


@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.scss']
})
export class MedicalRecordsComponent implements OnInit {



  constructor(public medicalRecordService: MedicalRecordService, private router:Router) { }
route() {
this.router.navigateByUrl("/createMedicalRecords");
}

ngOnInit(): void {
  this.getAll();
}


    delete(id: any) {
      console.log('--------------------Delete-----------------');
      
      this.medicalRecordService.deleteByID(id).subscribe(v => {
        alert("Data Deleted!");
        this.getAll();
      })
    }


 

    medicalRecordList: MedicalRecord[] = [];

  getAll() {
    this.medicalRecordService.getAll().subscribe((res: any) => {
      this.medicalRecordList = res;
    })
  }



}







 

















  


































