import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserType } from '../models/user-type';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  constructor(private http : HttpClient) { }

  getAllUserType() : Observable<UserType[]>{
      return this.http.get<UserType[]>("http://localhost:8089/usertype/all" );
    }

    addUserType(UserType : UserType) : Observable<UserType> {
      return this.http.post<UserType>("http://localhost:8089/usertype/new",UserType);
    }
    
    updateUserType(data : UserType) : Observable<UserType>{
      return this.http.put<UserType>("http://localhost:8089/usertype/update",data);
    } 
  
    deleteUserType(id : number)  : Observable<UserType>{
      return this.http.delete<UserType>("http://localhost:8089/usertype/delete/"+id );
    }
}
