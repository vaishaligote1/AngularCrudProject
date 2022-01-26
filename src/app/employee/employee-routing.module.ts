import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {
    path:'', component:EmployeeComponent,
    children:[
      {
        path:'employee-list',component:EmployeeListComponent,
        children:[
          {
            path:'employeedetail/:id', component:EmployeeDetailComponent
          },
        //second child
        {
          path:'update', component:UpdateEmployeeComponent
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
export class EmployeeRoutingModule { }
