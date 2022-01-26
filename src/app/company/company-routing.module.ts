import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company/company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';

const routes: Routes = [
  {
    path:'', component:CompanyComponent,
    children:[
      {
        path:'company-list', component:CompanyListComponent,
        children:[
          {
            path:'companydetail/:id' , component:CompanyDetailComponent
          },

          {
            path:'update', component:UpdateCompanyComponent
          }
        ]
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
