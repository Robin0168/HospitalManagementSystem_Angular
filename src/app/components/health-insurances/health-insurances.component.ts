import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-insurances',
  templateUrl: './health-insurances.component.html',
  styleUrls: ['./health-insurances.component.scss']
})
export class HealthInsurancesComponent {


  constructor(private router:Router){}
  route() {
  this.router.navigateByUrl("/newInsurance");
  }
}
