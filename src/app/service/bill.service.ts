
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientBill } from '../model/Bill';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientBillService {
  constructor(private httpClient: HttpClient) { }

   private apiURL = "http://localhost:8080/v1/api/patientBill";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }

    addData(patientBill: PatientBill) {
    return this.httpClient.post(this.apiURL, patientBill)
  }

  updateData(patientBill: PatientBill) {
    return this.httpClient.put(this.apiURL + "/" + patientBill.id, patientBill)
  }

  getAll(): Observable<object> {
        console.log("Call from PatientBill Service. ");
    return this.httpClient.get(this.apiURL);
  }

  getByID(id: any) {
    console.log("Call from service. ");
    return this.httpClient.get(this.apiURL + "/" + id);
  }

  deleteByID(id: any) {
    console.log("Delete Call from PatientBill Service. ");
    return this.httpClient.delete(this.apiURL + "/" + id);
  }
  private messageSource = new BehaviorSubject('false');
  
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {  this.messageSource.next(message) }

}




















  

  













  



 

















  












  





  
// // }







