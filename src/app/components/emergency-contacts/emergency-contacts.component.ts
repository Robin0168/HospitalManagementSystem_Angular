import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emergency-contacts',
  templateUrl: './emergency-contacts.component.html',
  styleUrls: ['./emergency-contacts.component.scss']
})
export class EmergencyContactsComponent {

  constructor(private router:Router){}
  route() {
  this.router.navigateByUrl("/createEmergencyPerson");
  }
}
