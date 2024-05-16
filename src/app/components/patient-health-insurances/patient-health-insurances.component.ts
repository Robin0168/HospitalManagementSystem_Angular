import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-health-insurances',
  templateUrl: './patient-health-insurances.component.html',
  styleUrls: ['./patient-health-insurances.component.scss']
})
export class PatientHealthInsurancesComponent {

  constructor(private router:Router){}
  route() {
  this.router.navigateByUrl("/createPatientSubscribedInsurance");
  }
}
