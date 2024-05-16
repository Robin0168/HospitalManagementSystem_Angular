import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavberComponent } from './components/navber/navber.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { PaymentComponent } from './components/payment/payment.component';
import { BedstatusComponent } from './components/bedstatus/bedstatus.component';
import { BloodbankComponent } from './components/bloodbank/bloodbank.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { nurseComponent } from './components/nurse/nurse.component';
import { NurseRegistrationComponent } from './components/nurse-registration/nurse-registration.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { PharmacistComponent } from './components/pharmacist/pharmacist.component';
import { LaboratoristComponent } from './components/laboratorist/laboratorist.component';
import { CreateDepartmentComponent } from './components/create-department/create-department.component';
import { UpdateDepartmentComponent } from './components/update-department/update-department.component';
import { PatientsComponent } from './components/patients/patients.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { PatientsAppointmentComponent } from './components/patients-appointment/patients-appointment.component';
import { BillComponent } from './components/bill/bill.component';
import { CreateBillComponent } from './components/create-bill/create-bill.component';
import { UpdateBillComponent } from './components/update-bill/update-bill.component';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { CreateDiagnosisComponent } from './components/create-diagnosis/create-diagnosis.component';
import { UpdateDiagnosisComponent } from './components/update-diagnosis/update-diagnosis.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { CreateAdmissionComponent } from './components/create-admission/create-admission.component';
import { UpdateAdmissionComponent } from './components/update-admission/update-admission.component';
import { AccountantComponent } from './components/accountant/accountant.component';
import { HospittalDiagnosisListComponent } from './components/hospittal-diagnosis-list/hospittal-diagnosis-list.component';
import { CreateHospitalDiagnosisListComponent } from './components/create-hospital-diagnosis-list/create-hospital-diagnosis-list.component';
import { UpdateHospitalDiagnosisListComponent } from './components/update-hospital-diagnosis-list/update-hospital-diagnosis-list.component';
import { BillPaymentHistoryComponent } from './components/bill-payment-history/bill-payment-history.component';
import { CreateBillPaymentHistoryComponent } from './components/create-bill-payment-history/create-bill-payment-history.component';
import { UpdateBillPaymentHistoryComponent } from './components/update-bill-payment-history/update-bill-payment-history.component';
import { PatientHistoryComponent } from './components/patient-history/patient-history.component';
import { CreatePatientHistoryComponent } from './components/create-patient-history/create-patient-history.component';
import { UpdatePatientHistoryComponent } from './components/update-patient-history/update-patient-history.component';
import { CreateMedicalRecordComponent } from './components/create-medical-record/create-medical-record.component';
import { MedicalRecordsComponent } from './components/medical-records/medical-records.component';
import { CreateFollowupComponent } from './components/create-followup/create-followup.component';
import { UpdateNurseComponent } from './components/update-nurse/update-nurse.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
    LoginComponent,
    SignUpComponent,
    NavberComponent,
    AccountantComponent,
    AppointmentComponent,
    PaymentComponent,
    BedstatusComponent,
    BloodbankComponent,
    MedicineComponent,
    nurseComponent,
    NurseRegistrationComponent,
    DepartmentsComponent,
    PharmacistComponent,
    LaboratoristComponent,
     CreateDepartmentComponent,
    UpdateDepartmentComponent,
    PatientsComponent,
    UpdatePatientComponent,
    PatientsAppointmentComponent,
    BillComponent,
    CreateBillComponent,
    UpdateBillComponent,
    DiagnosisComponent,
    CreateDiagnosisComponent,
    UpdateDiagnosisComponent,
    AdmissionsComponent,
    CreateAdmissionComponent,
    UpdateAdmissionComponent,
    HospittalDiagnosisListComponent,
    CreateHospitalDiagnosisListComponent,
    UpdateHospitalDiagnosisListComponent,
    BillPaymentHistoryComponent,
    CreateBillPaymentHistoryComponent,
    UpdateBillPaymentHistoryComponent,
    PatientHistoryComponent,
    CreatePatientHistoryComponent,
    UpdatePatientHistoryComponent,
    CreateMedicalRecordComponent,
    MedicalRecordsComponent,
    CreateFollowupComponent,
    UpdateNurseComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
