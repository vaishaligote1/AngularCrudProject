import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { HttpClient } from '@angular/common/http';
import { Company } from '../model/company';




@Injectable({
  providedIn: 'root'
})
export class CommonService {

   url:string="http://localhost:3000/Employee";
   url1:string=" http://localhost:3000/Company";

  //  emp:Employee[];

  constructor(private httpCilent:HttpClient){}

  saveEmployee(emp:Employee):Observable<Employee>{
    console.log("in service of saveEmployee"+ emp.email);
    console.log("in service of saveEmployee"+ this.url)
    return this.httpCilent.post<Employee>(this.url,emp);
  }

  getData():Observable<Employee[]>{
    return this.httpCilent.get<Employee[]>(this.url);
  }

  getEmployee(id:number):Observable<Employee>{
    return this.httpCilent.get<Employee>(this.url+"/"+id)
  }
 
  updateEmployee(emp:Employee):Observable<Employee>{
    return this.httpCilent.put<Employee>(this.url+"/"+emp.id,emp)
  }

  deleteData(id:number):Observable<Employee>{
    return this.httpCilent.delete<Employee>(this.url+"/"+id)
  }
  /// company


  getData1():Observable<Company[]>{
    return this.httpCilent.get<Company[]>(this.url1);
  }

  saveCompany(com:Company):Observable<Company>{
    console.log("in service of saveEmployee"+ com.email);
    console.log("in service of saveEmployee"+ this.url1)
    return this.httpCilent.post<Employee>(this.url1,com);
  }

  getCompany(id:number):Observable<Company>{
   return this.httpCilent.get<Company>(this.url1+"/"+id);
  }

  deleteCompany(id:number):Observable<Company>{
    return this.httpCilent.delete<Company>(this.url1+"/"+id)
  }

}