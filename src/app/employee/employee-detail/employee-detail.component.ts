import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private routes:ActivatedRoute,private common:CommonService,private l:Location) { }
  employeeObj:Employee;
  ngOnInit(): void {
    //first way is snapshot

    //second way
    this.routes.paramMap.subscribe(param1=>{
      this.common.getEmployee(parseInt(param1.get('id'))).subscribe(data=>{
        this. employeeObj=data;
      })
    })
  }

  getback(){
    this.l.back();
  }

}
