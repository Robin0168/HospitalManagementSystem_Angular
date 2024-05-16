import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { Nurse } from 'src/app/model/nurse';
import { NurseService } from 'src/app/service/nurse.service';
import { RestApiService } from 'src/app/service/rest-api.service';


@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.scss']
})
export class nurseComponent implements OnInit {


  constructor(public nurseService: NurseService) { }

  delete(id: any) {
    this.nurseService.deleteByID(id).subscribe((val: any) => {
      alert("Data Deleted!");
      this.getAll();
    })
  }


  ngOnInit(): void {
    this.getAll();
  }


  nurseList: Nurse[] = [];



  getAll() {
    this.nurseService.getAll().subscribe((res: any) => {
      this.nurseList = res;
    })
  }

 
}

