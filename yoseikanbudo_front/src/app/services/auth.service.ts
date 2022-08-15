import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }

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
      if(email == 'billgs@gmail.com' && password == 'admin123'){
        this.setToken('abc123abc123');
        return of({name: 'bill gs' , email:'billgs@gmail.com'});
      }
      return throwError(new Error('Faild to login'));
    
  }

}
