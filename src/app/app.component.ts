import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RestApiService } from './service/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  name = "Saiful";
  Country = "Bangladesh";
  Salary = 10000000;
  active: number = 5;

  constructor(public apiService: RestApiService){}

  sharedMessage:string = '';
  subscription!: Subscription;

  ngOnInit(): void {
    this.isLogin();
    this.subscription = this.apiService.currentMessage.subscribe(message => this.sharedMessage = message);
  
  }
  isLogin() {
    let login = localStorage.getItem("isLogin");
    if (login == "true") {
      this.apiService.changeMessage("true");
    }
  }
}
