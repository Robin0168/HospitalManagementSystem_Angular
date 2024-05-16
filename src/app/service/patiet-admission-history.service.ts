
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientAdmissionHistory } from '../model/patientAdmissionHistory';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientAdmissionHistoryService {

  constructor(private httpClient: HttpClient) { }
  private apiURL = "http://localhost:8080//v1/api/patientAdmissionHistory";

    httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }

    addData(patientAdmissionHistory: PatientAdmissionHistory) {
    return this.httpClient.post(this.apiURL, patientAdmissionHistory)
  }
  updateData( patientAdmissionHistory:  PatientAdmissionHistory) {
    return this.httpClient.put(this.apiURL + "/" +  patientAdmissionHistory.id,  patientAdmissionHistory)
  }

  getAll(): Observable<object> {
        console.log("Call from PatientAdmissionHistory Service. ");
    return this.httpClient.get(this.apiURL);
  }

  getByID(id: any) {
    console.log("Call from service. ");
    return this.httpClient.get(this.apiURL + "/" + id);
  }

    deleteByID(id: any) {
    console.log("Delete Call from PatientAdmissionHistory Service. ");
    return this.httpClient.delete(this.apiURL + "/" + id);
  }
  
  private messageSource = new BehaviorSubject('false');
  
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {  this.messageSource.next(message) }
}















  

  













  



 

















  












  





  
// // }


