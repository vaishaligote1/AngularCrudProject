import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company/company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateCompanyComponent } from './update-company/update-company.component';

console.log("company module loads")
@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    UpdateCompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,ReactiveFormsModule
  ]
})
export class CompanyModule { }
