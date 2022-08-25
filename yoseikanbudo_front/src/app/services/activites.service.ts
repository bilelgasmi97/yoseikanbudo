import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activites';


@Injectable({
  providedIn: 'root'
})
export class ActivitesService {

  constructor( private http : HttpClient) { }


  getAllActivites() : Observable<Activity[]>{
    return this.http.get<Activity[]>("http://localhost:8089/activites/all");
  }

  deleteActivites(id : number)  : Observable<Activity>{
    return this.http.delete<Activity>("http://localhost:8089/activites/delete/"+id );
  }
}
