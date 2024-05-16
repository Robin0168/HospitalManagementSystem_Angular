import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nurse } from '../model/nurse';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = "http://localhost:8080/v1/api/nurse";


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }



  addData(nurse: Nurse) {
    console.log("Call from service. ", nurse.name);
    return this.httpClient.post(this.apiURL, nurse)
  }

  updateData(nurse: Nurse) {
    console.log("Call from service. ", nurse.name);
    return this.httpClient.put(this.apiURL + "/" + nurse.id, nurse)
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
