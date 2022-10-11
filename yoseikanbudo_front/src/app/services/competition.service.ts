import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competition } from '../models/competition';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http : HttpClient) { }

  getCompetition() : Observable<Competition[]> {
    return this.http.get<Competition[]>("http://localhost:8089/Combat/all");
  }

  addCompetition(Competition: Competition) : Observable<Competition> {
    return this.http.post<Competition>("http://localhost:8089/Combat/new",Competition);
  }

  pdateCompetition(data : Competition) : Observable<Competition>{
    return this.http.put<Competition>("http://localhost:8089/Combat/update",data);
  } 

  deleteCompetition(id : number)  : Observable<Competition>{
    return this.http.delete<Competition>("http://localhost:8089/Combat/delete/"+id );
  }
}
