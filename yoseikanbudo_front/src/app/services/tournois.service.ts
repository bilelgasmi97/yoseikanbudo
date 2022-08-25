import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournois } from '../models/tournois';

@Injectable({
  providedIn: 'root'
})
export class TournoisService {

  constructor(private http : HttpClient) { }

  getTournois()  :Observable<Tournois[]> {
    return this.http.get<Tournois[]>("http://localhost:8089/tournois/all");
  } 

  addTournois(tournois : Tournois) : Observable<Tournois> {
    return this.http.post<Tournois>("http://localhost:8089/tournois/new",tournois);
  }

 

     updateTournois(data : Tournois) : Observable<Tournois>{
    return this.http.put<Tournois>("http://localhost:8089/tournois/update",data);
  } 

  deleteTournois(id : number)  : Observable<Tournois>{
    return this.http.delete<Tournois>("http://localhost:8089/tournois/delete/"+id );
  }
}
