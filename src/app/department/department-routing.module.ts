import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {
    path:'', component:DepartmentComponent,
    children:[
      {
        path:'department-list', component:DepartmentListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
