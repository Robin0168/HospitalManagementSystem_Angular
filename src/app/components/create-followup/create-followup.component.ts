import { PatientFollowupHistoryService } from 'src/app/service/patient-followup-history.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-followup',
  templateUrl: './create-followup.component.html',
  styleUrls: ['./create-followup.component.scss']
})
export class CreateFollowupComponent implements OnInit {
  ngOnInit(): void {
  
  }
  constructor(public patientFollowupHistoryService: PatientFollowupHistoryService, private router: Router) { }
  patientFollowupHistoryForm: FormGroup = new FormGroup({
    followupDate: new FormControl(''),
    followupNotes: new FormControl(''),
    historyId: new FormControl(''),

  });
      onSubmit() {
    console.log(this.patientFollowupHistoryForm.value);
    this.patientFollowupHistoryService.addData(this.patientFollowupHistoryForm.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/followups');
    });
  }
}