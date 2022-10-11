import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coach } from '../models/coach';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private http : HttpClient) { }

  getCoach() : Observable<Coach[]> {
    return this.http.get<Coach[]>("http://localhost:8089/coach/all");
  }

  addCoach(coach: Coach) : Observable<Coach> {
    return this.http.post<Coach>("http://localhost:8089/coach/new",coach);
  }

  pdateCoach(data : Coach) : Observable<Coach>{
    return this.http.put<Coach>("http://localhost:8089/coach/update",data);
  } 

  deleteCoach(id : number)  : Observable<Coach>{
    return this.http.delete<Coach>("http://localhost:8089/coach/delete/"+id );
  }
}
