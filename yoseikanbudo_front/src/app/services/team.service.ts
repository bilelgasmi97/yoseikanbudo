import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/team';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http : HttpClient) { }

  addTeams(team : Team) : Observable<Team> {
    return this.http.post<Team>("http://localhost:8089/team/new",team);
  }

  getTeams(){
    return this.http.get<any>("http://localhost:8089/team/all" );
  }

     updateTeams(data : Team) : Observable<Team>{
    return this.http.put<Team>("http://localhost:8089/team/update",data);
  } 

  deleteTeams(id : number)  : Observable<Team>{
    return this.http.delete<Team>("http://localhost:8089/team/delete/"+id );
  }

}
