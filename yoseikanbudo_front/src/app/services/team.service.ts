import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http : HttpClient) { }

  getTeams(){
    return this.http.get<any>("http://localhost:8080/TeamsController/");
  }

}
