import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './auth.guard';
import { LocaldataService } from './services/localdata.service';

import { CommonModule } from "@angular/common";
import { CompanyComponent } from './components/company/company.component';
import { AddressComponent } from './components/address/address.component';
import { AdminGuard } from './guards/admin.guard';
import { FormComponent } from './components/form/form.component';
import { EmailValidationComponent } from './components/email-validation/email-validation.component';
import { RegisterComponent } from './components/register/register.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FoodService } from './services/food.service';
import { MultipleApiComponent } from './components/multiple-api/multiple-api.component';
import { NgApexchartsModule } from 'ng-apexcharts';

import {NgxPaginationModule} from 'ngx-pagination';
import { SharedModule } from "./shared/shared/shared.module"
import { StudentComponent } from './modules/student/student.component';
import { EmployeeComponent } from './modules/employee/employee.component';


const routes : Routes = [
  {path : "",redirectTo : "users", pathMatch : "full" },
  {path : "users", component : UsersComponent, canActivate : [AuthGuard] },
  {path : "about", component : AboutComponent },
  {path : "student", component : StudentComponent },
  {path : "employee", component : EmployeeComponent },
  {path : "home", component : ContactComponent },
  {path : "register", component : RegisterComponent },
  {path : "email", component : EmailValidationComponent },
  {path : "form", component : FormComponent },
  {path : "user/:id", component : UserComponent,
  canActivate : [AuthGuard],
  canActivateChild : [AdminGuard],
  children:  [
    // {path : "", redirectTo : "address", pathMatch : "full"},
    {path : "address", component : AddressComponent},
    {path : "company", component : CompanyComponent},
  ]
},
  {path : "**", redirectTo: "home" },
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    CompanyComponent,
    AddressComponent,
    FormComponent,
    EmailValidationComponent,
    RegisterComponent,
    FileUploadComponent,
    MultipleApiComponent,
  ],
  imports: [
    BrowserModule,
     NgxPaginationModule,
    CommonModule,
    HttpClientModule,
    NgApexchartsModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard,LocaldataService,FoodService,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
