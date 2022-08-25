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

  addGalary(formData : FormData) : Observable<any> {
    return this.http.post<any>("http://localhost:8089/galary/new",formData);
  }

  pdateGalary(data : Galerie) : Observable<Galerie>{
    return this.http.put<Galerie>("http://localhost:8089/galary/update",data);
  } 

  deleteGalary(id : number)  : Observable<Galerie>{
    return this.http.delete<Galerie>("http://localhost:8089/galary/delete/"+id );
  }

}
