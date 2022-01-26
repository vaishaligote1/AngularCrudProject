import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const headerRoutes: Routes = [
  {
    path:'dashboard' ,component:DashboardComponent
  },
  {
    path:'contact-us',component:ContactUsComponent
  },
  {
    path:'about-us', component:AboutUsComponent

  },
  {
    path:'company',
    loadChildren:()=>import('src/app/company/company.module').then(module=>module.CompanyModule)
  },
  {
    path:'employee',
    loadChildren:()=>import('src/app/employee/employee.module').then(module=>module.EmployeeModule)
  },
  {
    path:'department',
    loadChildren:()=>import('src/app/department/department.module').then(module=>module.DepartmentModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(headerRoutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
