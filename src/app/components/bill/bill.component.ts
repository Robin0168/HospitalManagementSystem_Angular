import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientBill } from 'src/app/model/Bill';
import { PatientBillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  constructor(public patientBillService: PatientBillService, private router:Router) { }


ngOnInit(): void {
  this.getAll();
}


    delete(id: any) {
      console.log('--------------------Delete-----------------');
      
      this.patientBillService.deleteByID(id).subscribe(v => {
        alert("Data Deleted!");
        this.getAll();
      })
    }


 

    patientBillList: PatientBill[] = [];

  getAll() {
    this.patientBillService.getAll().subscribe((res: any) => {
      this.patientBillList = res;
    })
  }




}


















 

















  


































