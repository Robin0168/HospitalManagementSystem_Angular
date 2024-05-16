import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { RestApiService } from 'src/app/service/rest-api.service';
import { NurseService } from 'src/app/service/nurse.service';


@Component({
  selector: 'app-nurse-registration',
  templateUrl: './nurse-registration.component.html',
  styleUrls: ['./nurse-registration.component.scss']
})
export class NurseRegistrationComponent implements OnInit {

  constructor(public nurseService: NurseService, private router: Router ) { }


 ngOnInit(): void {

  }

  
  nurseForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    salary: new FormControl(''),
    batch_no: new FormControl(''),
   });


  onSubmit() {
    console.log(this.nurseForm.value);
    this.nurseService.addData(this.nurseForm.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/nurse');
    });
  }



}
