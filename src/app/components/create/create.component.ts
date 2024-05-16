import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/User';
import { RestApiService } from '../../service/rest-api.service';
import { Router } from '@angular/router';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(public apiService: RestApiService, private router: Router, private departmentService: DepartmentService ) { }


 ngOnInit(): void {

this.departmentService.getAll().subscribe((res:any)=>{
  this.departmentList=res;
})
  }
  departmentList!: any[];
  

  userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    visit_price: new FormControl(''),
    followup_price: new FormControl(''),
    note: new FormControl(''),
    department_id: new FormControl(),
    department: new FormControl(),
    // gridCheck: new FormControl('')
  });


  onSubmit() {
    console.log(this.userForm.value);
    this.apiService.addData(this.userForm.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/doctors');
    });
  }

  // clear() {
  //   this.userForm = new FormGroup({
  //     inputEmail4: new FormControl(''),
  //     inputPassword4: new FormControl(),
  //     inputAddress: new FormControl(''),
  //     inputAddress2: new FormControl(''),
  //     inputCity: new FormControl(''),
  //     inputZip: new FormControl(''),
  //     gridCheck: new FormControl('')
  //   });
  // }

}

  
