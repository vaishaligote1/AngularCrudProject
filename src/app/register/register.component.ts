import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../shared/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
      this.commonservice.saveEmployee(this.registerForm.value).subscribe();
      window.location.reload();
    }

  }
  goBack(){
    this.l.back();
  }

}
