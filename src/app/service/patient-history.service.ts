
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientHistory } from '../model/patientHistory';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientHistoryService {

  constructor(private httpClient: HttpClient) { }

   private apiURL = "http://localhost:8080/v1/api/patientHistory";
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }
    addData(patientHistory: PatientHistory) {
    return this.httpClient.post(this.apiURL, patientHistory)
  }

  updateData(patientHistory: PatientHistory) {
    return this.httpClient.put(this.apiURL + "/" + patientHistory.id, patientHistory)
  }
  getAll(): Observable<object> {
        console.log("Call from PatientHistory Service. ");
    return this.httpClient.get(this.apiURL);
  }
  getByID(id: any) {
    console.log("Call from service. ");
    return this.httpClient.get(this.apiURL + "/" + id);
  }
  deleteByID(id: any) {
    console.log("Delete Call from PatientHistory Service. ");
    return this.httpClient.delete(this.apiURL + "/" + id);
  }
  private messageSource = new BehaviorSubject('false');
  
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {  this.messageSource.next(message) }

}





































  

  













  



 

















  












  





  
// // // }







