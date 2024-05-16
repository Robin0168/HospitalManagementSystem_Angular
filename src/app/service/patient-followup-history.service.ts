
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientFollowupHistory } from '../model/patientFollowupHistory';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientFollowupHistoryService {

  constructor(private httpClient: HttpClient) { }
    private apiURL = "http://localhost:8080/v1/api/ patientFollowupHistory";
        
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  } 
    addData(patientFollowupHistory: PatientFollowupHistory) {
    return this.httpClient.post(this.apiURL, patientFollowupHistory)
  }

  updateData(patientFollowupHistory: PatientFollowupHistory) {
    return this.httpClient.put(this.apiURL + "/" + patientFollowupHistory.id, patientFollowupHistory)
  }

   getAll(): Observable<object> {
        console.log("Call from PatientFollowupHistory Service. ");
    return this.httpClient.get(this.apiURL);
  }

  getByID(id: any) {
    console.log("Call from service. ");
    return this.httpClient.get(this.apiURL + "/" + id);
  }
  
  deleteByID(id: any) {
    console.log("Delete Call from PatientFollowupHistory Service. ");
    return this.httpClient.delete(this.apiURL + "/" + id);
  }
  private messageSource = new BehaviorSubject('false');
  
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {  this.messageSource.next(message) }
}









 






  























  













  



 

















  












  





  
// // // }


