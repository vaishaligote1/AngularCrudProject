import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

console.log("employee modules load...")
@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
