import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../../service/rest-api.service';
import { User } from '../../model/User';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(public apiService: RestApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  id!: any;
  userData!: User;
    

  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
    console.log(this.id);
    this.getDataById(this.id);
  }

  getDataById(id: any){
    this.apiService.getByID(id).subscribe((v: any) => {
      this.userData = v;
      this.userForm.setValue(this.userData);
    })
  }


  onSubmit() {
    this.apiService.updateData(this.userForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/nurse');
    })
  }

  

  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    mobile: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(''),
    visit_price: new FormControl(),
    followup_price: new FormControl(),
    note: new FormControl(''),
    department_id: new FormControl(),
    createdAt: new FormControl(''),
    updatedAt: new FormControl(''),
    createdBy: new FormControl(''),
    updatedBy: new FormControl(''),
    active: new FormControl(),
    deleted: new FormControl()
    

  });

}
