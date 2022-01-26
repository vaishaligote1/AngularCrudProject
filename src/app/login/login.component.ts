import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _fb:FormBuilder,private router:Router,private common:CommonService) { }
   
  loginForm: FormGroup;
  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm()
   {
     this.loginForm=this._fb.group(
      {
        userName:['',Validators.required],
        password:['',Validators.required]
      }
     )
   }
  onLoginSubmit(){
    // if(this.loginForm.valid){
    //   this.router.navigate(['login/header'])
    // }

    this.common.getData().subscribe(list=>{
      for(let emp of list){
        if(this.loginForm.get('userName').value==emp.username&&
        this.loginForm.get('password').value==emp.password){
          this.router.navigate(['login/header'])
        
        }
      }
      
    })

  }

}
