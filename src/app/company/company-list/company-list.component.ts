import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(private common: CommonService, private locations:Location) { }
  comlist: Company[];
  ngOnInit() {
    this.common.getData1().subscribe(list => this.comlist = list);
  }
  getback() {
    this.locations.back();
  }
  deletecompany(id: number) {
    this.common.deleteData(id).subscribe();
    window.location.reload();
  }
}
