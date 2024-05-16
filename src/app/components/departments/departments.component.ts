import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/model/department';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit  {
 
    constructor(public departmentService: DepartmentService) { }


    delete(id: any) {
      console.log('--------------------Delete-----------------');
      
      this.departmentService.deleteByID(id).subscribe(v => {
        alert("Data Deleted!");
        this.getAll();
      })
    }

  // edit(department: Department) {
  // }
 
     ngOnInit(): void {
    this.getAll();
  }

  departmentList: Department[] = [];

  getAll() {
    this.departmentService.getAll().subscribe((res: any) => {
      this.departmentList = res;
    })
  }

}












