import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arbitrator } from '../models/arbitrator';

@Injectable({
  providedIn: 'root'
})
export class ArbitratorService {

  constructor(private http : HttpClient) { }

  getAllArbitrator() : Observable<Arbitrator[]> {
    return this.http.get<Arbitrator[]>("http://localhost:8089/arbitrator/all");
  }

  addArbitrator(arbitre : Arbitrator) : Observable<Arbitrator> {
    return this.http.post<Arbitrator>("http://localhost:8089/arbitrator/new",arbitre);
  }

  pdateArbitrator(data : Arbitrator) : Observable<Arbitrator>{
    return this.http.put<Arbitrator>("http://localhost:8089/arbitrator/update",data);
  } 

  deleteArbitrator(id : number)  : Observable<Arbitrator>{
    return this.http.delete<Arbitrator>("http://localhost:8089/arbitrator/delete/"+id );
  }
}
