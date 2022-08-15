import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product-model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

 product : Product =  new Product();



  constructor(private prodserve :  ProductService , private route : Router) { }

  

  ngOnInit(): void {
   
  } 

  onSubmit(){
   console.log(this.product)
   this.addProduct()
   
  }

  gotoproductlist(){
    
  }

    addProduct(){
      this.prodserve.addProducts(this.product).subscribe(
        (res) => {
          this.route.routeReuseStrategy.shouldReuseRoute = () => false;
          this.route.navigate(['/admin/products'] , { queryParamsHandling : "merge"})
        }
      )
    } 
  

} 
