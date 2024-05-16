import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { DepartmentService } from "src/app/service/department.service";




@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})

export class CreateDepartmentComponent implements OnInit {
 
constructor(public departmentService: DepartmentService, private router: Router ) { }
  ngOnInit(): void {
    
  }

  departmentForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    note: new FormControl(''),
    
  });


  onSubmit() {
    console.log(this.departmentForm.value);
    this.departmentService.addData(this.departmentForm.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/departments');
    });
  }



}





