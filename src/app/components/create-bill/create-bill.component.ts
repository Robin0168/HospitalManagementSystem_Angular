
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientBillService } from 'src/app/service/bill.service';



@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.scss']
})


export class CreateBillComponent implements OnInit {
  

  ngOnInit(): void {
  }

  constructor(public patientBillService: PatientBillService, private router: Router) { }

  patientBillForm: FormGroup = new FormGroup({
    patientHistory_ID: new FormControl(''),
    totalAmount: new FormControl(''),
    due: new FormControl(''),

  });


  onSubmit() {
    console.log(this.patientBillForm.value);
    this.patientBillService.addData(this.patientBillForm.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/bill');
    });
  }

}



























