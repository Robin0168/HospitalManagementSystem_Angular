// import { catchError } from 'rxjs/operators';
import { Department } from './../model/department';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class DepartmentService {



  constructor(private httpClient: HttpClient) { }

  


  private apiURL = "http://localhost:8080/v1/api/hospitalDepartment";
  // private apiURL = "http://localhost:3000";
  // private baseUrl = 'http://localhost:8080';



  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }



  addData(department: Department) {
    return this.httpClient.post(this.apiURL, department)
  }

  updateData(department: Department) {
    return this.httpClient.put(this.apiURL + "/" + department.id, department)
  }

//   getAll(): Observable<Object> {


  getAll(): Observable<any> {
        console.log("Call from Department Service. ");
    return this.httpClient.get(this.apiURL);
  }



  getByID(id: any) {
    console.log("Call from service. ");
    return this.httpClient.get(this.apiURL + "/" + id);
  }


  deleteByID(id: any) {
    console.log("Delete Call from Department Service. ");
    return this.httpClient.delete(this.apiURL + "/" + id);
  }

  
  private messageSource = new BehaviorSubject('false');
  
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {  this.messageSource.next(message) }

}











  





  
// }

