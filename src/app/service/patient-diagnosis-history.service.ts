
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientDiagnosisHistory } from '../model/patientDiagnosisHistory';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientDiagnosisHistoryService {
  constructor(private httpClient: HttpClient) { }
   private apiURL = "http://localhost:8080/v1/api/patientDiagnosisHistory";

     httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }

    addData(patientDiagnosisHistory: PatientDiagnosisHistory) {
    return this.httpClient.post(this.apiURL, patientDiagnosisHistory)
  }

  updateData(patientDiagnosisHistory: PatientDiagnosisHistory) {
    return this.httpClient.put(this.apiURL + "/" + patientDiagnosisHistory.id, patientDiagnosisHistory)
  }


  getAll(): Observable<object> {
        console.log("Call from PatientDiagnosisHistory Service. ");
    return this.httpClient.get(this.apiURL);
  }

  getByID(id: any) {
    console.log("Call from service. ");
    return this.httpClient.get(this.apiURL + "/" + id);
  }
  deleteByID(id: any) {
    console.log("Delete Call from PatientDiagnosisHistory Service. ");
    return this.httpClient.delete(this.apiURL + "/" + id);
  }

  private messageSource = new BehaviorSubject('false');
  
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {  this.messageSource.next(message) }
}














  













  



 

















  












  





  
// // }


