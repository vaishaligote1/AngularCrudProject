import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-registercom',
  templateUrl: './registercom.component.html',
  styleUrls: ['./registercom.component.css']
})
export class RegistercomComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private _fb:FormBuilder,private commonservice:CommonService,private l:Location) { }

  ngOnInit(): void {
    this.registerForm=this._fb.group(
      {
        id:[],
        ename:[''],
        email:[''],
        mobile:[''],
        designation:[''],
        username:[''],
        password:['']
      }
    )
  
  }

  onSubmit(){
    if(this.registerForm.valid){
      this.commonservice.saveCompany(this.registerForm.value).subscribe();
    }

  }
  goBack(){
    this.l.back();
  }

}
