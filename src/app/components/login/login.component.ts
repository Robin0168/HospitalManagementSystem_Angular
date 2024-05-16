import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(public authService: AuthService, public restAPIService: RestApiService, private router: Router) { }



  ngOnInit(): void {
    this.isLogin();
  }
  isLogin() {
    let login = localStorage.getItem("isLogin");
    if (login !== "true") {
      this.router.navigateByUrl('/login');
    }
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    remember_me: new FormControl()
  });



  // login(){
  //   console.log(this.loginForm.value);
  //   this.authService.login(this.loginForm.value);
  // }
  authList: any[] = [];

  login() {
    this.authService.getAll().subscribe((res: any) => {
      this.authList = res;

      let flag = false;

      for (let index = 0; index < this.authList.length; index++) {
        if (this.loginForm.value.username == this.authList[index].username && this.loginForm.value.password == this.authList[index].password) {
          localStorage.setItem("isLogin", "true");
          localStorage.setItem("username", this.loginForm.value.username);
          localStorage.setItem("role", this.authList[index].role);
          // localStorage.setItem("username", this.loginForm.value.username);
          flag = true;
          this.restAPIService.changeMessage('true');
        }
      }
      if (flag == true) {
        this.router.navigateByUrl('/home');
      } else {
        alert("Incorrect UserName Or Password!")
      }
    });
  }


}


