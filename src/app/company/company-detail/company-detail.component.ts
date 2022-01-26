import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  constructor(private routes:ActivatedRoute,private common:CommonService,private l:Location) { }
   comp:Company;
  ngOnInit(): void {

    this.routes.paramMap.subscribe(param1=>{
      this.common.getCompany(parseInt(param1.get('id'))).subscribe(data=>{
        this.comp=data;
      })
    })
   

  }
  getback(){
    this.l.back();
    
  }

}
