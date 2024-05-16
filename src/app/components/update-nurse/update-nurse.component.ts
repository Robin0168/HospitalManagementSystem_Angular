import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Nurse } from 'src/app/model/nurse';
import { NurseService } from 'src/app/service/nurse.service';

@Component({
  selector: 'app-update-nurse',
  templateUrl: './update-nurse.component.html',
  styleUrls: ['./update-nurse.component.scss']
})
export class UpdateNurseComponent implements OnInit {

  constructor(public nurseService: NurseService,
    private router: Router,
    private route: ActivatedRoute) { }

  id!: any;
  nurse!: Nurse;
    

  ngOnInit(): void {
    this.id = this.route.snapshot.params['nurseId'];
    console.log(this.id);
    this.getDataById(this.id);
  }

  getDataById(id: any){
    this.nurseService.getByID(id).subscribe((v: any) => {
      this.nurse = v;
      this.nurseForm.setValue(this.nurse);
    })
  }


  onSubmit() {
    this.nurseService.updateData(this.nurseForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/nurse');
    })
  }

  

  nurseForm: FormGroup = new FormGroup({
    // id: new FormControl(),
    name: new FormControl(''),
    address: new FormControl(''),
    salary: new FormControl(''),
    batch_no: new FormControl(''),
    // createdAt: new FormControl(''),
    // updatedAt: new FormControl(''),
    // createdBy: new FormControl(''),
    // updatedBy: new FormControl(''),
    // active: new FormControl(),
    // deleted: new FormControl()
    

  });

}
