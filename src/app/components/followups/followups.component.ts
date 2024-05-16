import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-followups',
  templateUrl: './followups.component.html',
  styleUrls: ['./followups.component.scss']
})
export class FollowupsComponent {
  constructor(private router:Router){}
route() {
this.router.navigateByUrl("/createFollowup");
}
}
