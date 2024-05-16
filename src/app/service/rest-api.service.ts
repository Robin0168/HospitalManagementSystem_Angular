import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = "http://localhost:8080/v1/api/doctor";
  // private apiURL = "http://localhost:3000";
  // private apiURL = "http://localhost:3000/posts";
  // private baseUrl = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }



  addData(user: User) {
    console.log("Call from service. ", user.name);
    return this.httpClient.post(this.apiURL, user)
  }

  updateData(user: User) {
    console.log("Call from service. ", user.name);
    return this.httpClient.put(this.apiURL + "/" + user.id, user)
  }


  getAll(): Observable<Object> {
    console.log("Call from service. ");
    return this.httpClient.get(this.apiURL);
  }



  getByID(id: any) {
    console.log("Call from service. ");
    return this.httpClient.get(this.apiURL + "/" + id);
  }


  deleteByID(id: any) {
    console.log("Delete Call from service. ");
    return this.httpClient.delete(this.apiURL + "/" + id);
  }

  
  private messageSource = new BehaviorSubject('false');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {  this.messageSource.next(message) }

  
}
