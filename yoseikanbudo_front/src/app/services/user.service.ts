import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getAllUsers() : Observable<Users[]>{
      return this.http.get<Users[]>("http://localhost:8089/users/all" );
    }

    addUsers(users : Users) : Observable<Users> {
      return this.http.post<Users>("http://localhost:8089/users/new",users);
    }
    
    updateUsers(data : Users) : Observable<Users>{
      return this.http.put<Users>("http://localhost:8089/users/update",data);
    } 
  
    deleteUsers(id : number)  : Observable<Users>{
      return this.http.delete<Users>("http://localhost:8089/users/delete/"+id );
    }
}
