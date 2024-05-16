
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(private httpClient: HttpClient) { }
   private apiURL = "http://localhost:8080/v1/api/patient";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }

    addData(patient: Patient) {
    return this.httpClient.post(this.apiURL, patient)
  }

  updateData(patient: Patient) {
    return this.httpClient.put(this.apiURL + "/" + patient.id, patient)
  }


  getAll(): Observable<object> {
        console.log("Call from Patient Service. ");
    return this.httpClient.get(this.apiURL);
  }

  getByID(id: any) {
    console.log("Call from service. ");
    return this.httpClient.get(this.apiURL + "/" + id);
  }

  deleteByID(id: any) {
    console.log("Delete Call from Patient Service. ");
    return this.httpClient.delete(this.apiURL + "/" + id);
  }

  private messageSource = new BehaviorSubject('false');
  
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {  this.messageSource.next(message) }

  
}
  













  



 

















  












  





  
// }


