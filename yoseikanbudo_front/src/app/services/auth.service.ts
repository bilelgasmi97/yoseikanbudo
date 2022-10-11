import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router , private http : HttpClient) { }

  adms : Admin[] = []
  adm !: Admin

  namr !: String;


  getAdmin() :Observable<Admin>{
    return this.http.get<Admin>("http://localhost:8089/login/admin");
  }
  
  getAdm(){
    this.http.get<Admin[]>("http://localhost:8089/login/all").subscribe({
      next:(res) => {
        this.adms = res
      },
      error:(err)=>{
        alert("error while fetching data !!! ")
      }
    })
  }


  setToken(token:string){
    localStorage.setItem('token',token)
  }
  getToken():string | null{
    return localStorage.getItem('token');
  } 
  isLoggedIn(){
    return this.getToken != null;
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  login({email , password} : any) : Observable<any>{
    this.http.get<Admin[]>("http://localhost:8089/login/all",).subscribe({
      next:(res) => {
        this.adms = res
        this.namr = res[0].name
      },
      error:(err)=>{
        alert("error while fetching data !!! ")
      }
    })
      if(email == this.adms[0].gmail && password == this.adms[0].password){
        this.setToken('abc123abc123');
        return of({name: this.adms[0].name , email:this.adms[0].gmail});
      }
      return throwError(new Error('Faild to login'));
    
  }

}
