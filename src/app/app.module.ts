import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyModule } from './company/company.module';
import { EmployeeModule } from './employee/employee.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from './header/header.module';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RegistercomComponent } from './registercom/registercom.component';


console.log("app module load...")
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    RegistercomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    
    FormsModule,
    HttpClientModule


    //lazy loading
    // CompanyModule,
    // EmployeeModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }   
