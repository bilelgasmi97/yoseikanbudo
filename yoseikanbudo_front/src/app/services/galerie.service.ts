import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Galerie } from '../models/galerie';

@Injectable({
  providedIn: 'root'
})
export class GalerieService {

  constructor(private http : HttpClient) { }


  getGalary() : Observable<Galerie[]> {
    return this.http.get<Galerie[]>("http://localhost:8089/galary/all");
  }

  addGalary(gal : Galerie) : Observable<Galerie> {
    return this.http.post<Galerie>("http://localhost:8089/galary/new",gal);
  }

  pdateGalary(data : Galerie) : Observable<Galerie>{
    return this.http.put<Galerie>("http://localhost:8089/galary/update",data);
  } 

  deleteGalary(id : number)  : Observable<Galerie>{
    return this.http.delete<Galerie>("http://localhost:8089/galary/delete/"+id );
  }

}
