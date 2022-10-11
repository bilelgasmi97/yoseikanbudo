import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  /* headers = new HttpHeaders().set('Content-Type' , 'application/json').set('Accept' , 'application/json');
    httpOption = {
      headers : this.headers
    } */

  constructor(private http : HttpClient) { }

  addProducts(formm : FormData) : Observable<any> {
    return this.http.post<any>("http://localhost:8089/product/new",formm);
  }

   getProducts(){
    return this.http.get<any>("http://localhost:8089/product/all" );
  }

     updateProducts(data : Product) : Observable<Product>{
    return this.http.put<Product>("http://localhost:8089/product/update",data);
  } 

  deleteProducts(id : number)  : Observable<Product>{
    return this.http.delete<Product>("http://localhost:8089/product/delete/"+id );
  } 
    


}
