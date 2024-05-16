import { HospitalDiagnosisList } from './model/hospitalDiagnosisList';
import { PatientBillPaymentHistory } from './model/patientBillPaymentHistory';
import { UpdateDepartmentComponent } from './components/update-department/update-department.component';
import { UpdateBillComponent } from './components/update-bill/update-bill.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { PaymentComponent } from './components/payment/payment.component';
import { BedstatusComponent } from './components/bedstatus/bedstatus.component';
import { BloodbankComponent } from './components/bloodbank/bloodbank.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { nurseComponent } from './components/nurse/nurse.component';
import { NurseRegistrationComponent } from './components/nurse-registration/nurse-registration.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { PharmacistComponent } from './components/pharmacist/pharmacist.component';
import { LaboratoristComponent } from './components/laboratorist/laboratorist.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientsAppointmentComponent } from './components/patients-appointment/patients-appointment.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { BillComponent } from './components/bill/bill.component';
import { CreateBillComponent } from './components/create-bill/create-bill.component';
import { CreateDepartmentComponent } from './components/create-department/create-department.component';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { CreateDiagnosisComponent } from './components/create-diagnosis/create-diagnosis.component';
import { UpdateDiagnosisComponent } from './components/update-diagnosis/update-diagnosis.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { CreateAdmissionComponent } from './components/create-admission/create-admission.component';
import { UpdateAdmissionComponent } from './components/update-admission/update-admission.component';
import { FollowupsComponent } from './components/followups/followups.component';
import { CreateEmergencyContactComponent } from './components/create-emergency-contact/create-emergency-contact.component';
import { CreateFollowupComponent } from './components/create-followup/create-followup.component';
import { CreateHealthInsuranceComponent } from './components/create-health-insurance/create-health-insurance.component';
import { CreateMedicalRecordComponent } from './components/create-medical-record/create-medical-record.component';
import { CreatePatientHealthInsuranceComponent } from './components/create-patient-health-insurance/create-patient-health-insurance.component';
import { EmergencyContactsComponent } from './components/emergency-contacts/emergency-contacts.component';
import { HealthInsurancesComponent } from './components/health-insurances/health-insurances.component';
import { MedicalRecordsComponent } from './components/medical-records/medical-records.component';
import { PatientHealthInsurancesComponent } from './components/patient-health-insurances/patient-health-insurances.component';
import { UpdateEmergencyContactComponent } from './components/update-emergency-contact/update-emergency-contact.component';
import { UpdateFollowupComponent } from './components/update-followup/update-followup.component';
import { UpdateHealthInsuranceComponent } from './components/update-health-insurance/update-health-insurance.component';
import { UpdateMedicalRecordComponent } from './components/update-medical-record/update-medical-record.component';
import { UpdatePatientHealthInsuranceComponent } from './components/update-patient-health-insurance/update-patient-health-insurance.component';
import { AccountantComponent } from './components/accountant/accountant.component';
import { PatientHistoryComponent } from './components/patient-history/patient-history.component';
import { CreatePatientHistoryComponent } from './components/create-patient-history/create-patient-history.component';
import { UpdatePatientHistoryComponent } from './components/update-patient-history/update-patient-history.component';
import { BillPaymentHistoryComponent } from './components/bill-payment-history/bill-payment-history.component';
import { CreateBillPaymentHistoryComponent } from './components/create-bill-payment-history/create-bill-payment-history.component';
import { UpdateBillPaymentHistoryComponent } from './components/update-bill-payment-history/update-bill-payment-history.component';
import { HospittalDiagnosisListComponent } from './components/hospittal-diagnosis-list/hospittal-diagnosis-list.component';
import { CreateHospitalDiagnosisListComponent } from './components/create-hospital-diagnosis-list/create-hospital-diagnosis-list.component';
import { UpdateHospitalDiagnosisListComponent } from './components/update-hospital-diagnosis-list/update-hospital-diagnosis-list.component';
import { UpdateNurseComponent } from './components/update-nurse/update-nurse.component';




const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: '', component: LoginComponent },
  { path: '', component:DeshboardComponent, loadChildren:() =>import('./deshboard/deshboard.module').then(x=>x.DeshboardModule) },
 
  { path: 'departments', component: DepartmentsComponent },
  { path: 'createDepartment', component: CreateDepartmentComponent },
  { path: 'updateDepartment', component: UpdateDepartmentComponent },

  { path: 'doctors', component: ListComponent },
  { path: 'createDoctor', component: CreateComponent },
  { path: 'updateDoctor/:userId', component: EditComponent },

                     // **** satarting patient dropdown
  { path: 'patients', component: PatientsComponent },
  { path: 'bookAnAppointment', component: PatientsAppointmentComponent },
  { path: 'updatePatient', component: UpdatePatientComponent },
  { path: 'appointments', component: AppointmentComponent },

  { path: 'medicalRecords', component: MedicalRecordsComponent },
  // not working createMedicalRecords
  { path: 'createMedicalRecords', component: CreateMedicalRecordComponent },
  { path: 'updateMedicalRecord', component: UpdateMedicalRecordComponent },

  { path: 'medicalHistory', component: PatientHistoryComponent },
  { path: 'newMedicalHistory', component: CreatePatientHistoryComponent },
  { path: 'updateMedicalHistory', component: UpdatePatientHistoryComponent },

  { path: 'patientDiagnosis', component: DiagnosisComponent },
  { path: 'createPatientDiagnosis', component: CreateDiagnosisComponent },
  { path: 'updatePatientDiagnosis', component: UpdateDiagnosisComponent },
                          // *** not in patient dropdown
  { path: 'hospitalDiagnosisList', component: HospittalDiagnosisListComponent },
  { path: 'newHospitalDiagnosisInformation', component: CreateHospitalDiagnosisListComponent },
  { path: 'updateHospitalDiagnosisInformation', component: UpdateHospitalDiagnosisListComponent },

  { path: 'followups', component: FollowupsComponent },
  // not working createFollowup
  { path: 'createFollowup', component: CreateFollowupComponent },
  { path: 'updateFollowup', component: UpdateFollowupComponent },

  { path: 'patientSubscribedInsurances', component: PatientHealthInsurancesComponent },
  // not working createPatientSubscribedInsurance
  { path: 'createPatientSubscribedInsurance', component: CreatePatientHealthInsuranceComponent },
  { path: 'updatePatientSubscribedInsurance', component: UpdatePatientHealthInsuranceComponent },
                            
  { path: 'availableHealthInsurances', component: HealthInsurancesComponent },
  // not working newInsurance
  { path: 'newInsurance', component: CreateHealthInsuranceComponent },
  { path: 'updateHealthInsuranceInformation', component: UpdateHealthInsuranceComponent },

  { path: 'emergencyContactPerson', component: EmergencyContactsComponent },
  // not working createEmergencyPerson
  { path: 'createEmergencyPerson', component: CreateEmergencyContactComponent },
  { path: 'updateEmergencyPerson', component: UpdateEmergencyContactComponent },

  { path: 'patientBillPaymentRecord', component: BillPaymentHistoryComponent },
  { path: 'newBillPaymentRecord', component: CreateBillPaymentHistoryComponent },
  { path: 'updateBillPaymentRecord', component: UpdateBillPaymentHistoryComponent },
                                    // *** not in patient dropdown
  { path: 'payment', component: PaymentComponent },
                                     // *** ending patient dropdown
  { path: 'bill', component: BillComponent },
  { path: 'createBill', component: CreateBillComponent },
  { path: 'updateBill', component: UpdateBillComponent },

  { path: 'admissions', component: AdmissionsComponent },
  { path: 'createAdmission', component: CreateAdmissionComponent },
  { path: 'updateAdmission', component: UpdateAdmissionComponent },
  
  { path: 'nurse', component: nurseComponent },
  { path: 'nurseRegistration', component: NurseRegistrationComponent },
  { path: 'updateNurse', component: UpdateNurseComponent },

  { path: 'bedStatus', component:BedstatusComponent },
  { path: 'bloodBank', component: BloodbankComponent },
  { path: 'medicine', component: MedicineComponent },
  { path: 'pharmacist', component: PharmacistComponent },
  { path: 'laboratorist', component: LaboratoristComponent },
  { path: 'accountant', component: AccountantComponent },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },

  // { path: 'home', component: HomeComponent },
  // { path: '**', component: HomeComponent },
  // { path: 'post/:postId/view', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
