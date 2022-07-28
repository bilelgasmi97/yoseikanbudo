import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  addProducts(data : any){
    return this.http.post("http://localhost:8080/ProductsController/",data);
  }

  getProducts(){
    return this.http.get<any>("http://localhost:8080/ProductsController/" );
  }

   /*  updateProducts(id : number){
    return this.http.put<any>("http://localhost:8080/ProductsController/",id);
  } */

  deleteProducts(id : number){
    return this.http.delete<any>("http://localhost:8080/ProductsController/"+id);
  }
    


}
