import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { RestApiService } from '../../service/rest-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public apiService: RestApiService) { }

  delete(id: any) {
    console.log('--------------------Delete-----------------');
    
    this.apiService.deleteByID(id).subscribe(v => {
      alert("Data Deleted!");
      this.getAll();
    })
  }





  // edit(_t14: User) {
  // }

  ngOnInit(): void {
    this.getAll();
  }


  userList: User[] = [];



  getAll() {
    this.apiService.getAll().subscribe((res: any) => {
      this.userList = res;
    })
  }

  // newMessage(){
  //   this.apiService.changeMessage("Hasanat")
  // }


  // ngOnInit(): void {
  //   this.getAllData();
  // }


  // userList: User[] = [];

  // getAllData() {
  //   this.apiService.getAll().subscribe((res: any) => {
  //     console.log('GetAll called successfully!')
  //     this.userList = res;
  //   });
  // }



  // delete(ob: User) {
  //   this.userList = this.userList.filter(item => item !== ob);
  // }


  // editData: boolean = false;

  // edit(ob: User) {
  //   this.editData = true;
  // }


  // setImage(abc: number) {
  //   if (abc > 5) {
  //     this.image = "/assets/image.PNG"
  //   } else {
  //     this.image = "/assets/abc.PNG"
  //   }
  // }


  // public image = "/assets/image.PNG"
  // age = true;

  // //Event Binding
  // onClickBTN() {
  //   if (this.age != true) {
  //     this.image = "/assets/image.PNG"
  //     this.age = true;
  //   } else {
  //     this.image = "/assets/abc.PNG"
  //     this.age = false;
  //   }
  // }



  // //Interpolation Binding
  // public name = "Bangladesh"
  // public salary = 500;
  // public topic = "Data Binding"



  // //Two-way Data Binding
  // public random = ""

  // //



  // // posts: Post[] = [];

}
