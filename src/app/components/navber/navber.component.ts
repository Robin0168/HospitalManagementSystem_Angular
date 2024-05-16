import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.scss']
})
export class NavberComponent implements OnInit {

  constructor(public apiService: RestApiService, private router: Router) { }

  userRole: any;
  username: any;
  
  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.userRole = localStorage.getItem("role");
  }

  logOut() {
      localStorage.removeItem('username');
      localStorage.removeItem('role');
      localStorage.removeItem('isLogin');
      this.apiService.changeMessage("false");
      this.router.navigateByUrl('/login');
  }
}
