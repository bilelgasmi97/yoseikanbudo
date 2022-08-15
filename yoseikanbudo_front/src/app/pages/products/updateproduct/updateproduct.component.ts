import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product-model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent implements OnInit {

  constructor(private prodserve :  ProductService , private route : Router ,
     @Inject( MAT_DIALOG_DATA)  public openDialog2 : Product) { }

     data : Product = this.openDialog2

  ngOnInit(): void {
   
  }

  onSubmit(){
    this.updateProduct();
  }
  
  updateProduct(){
    this.prodserve.updateProducts(this.data).subscribe(
      (res) => {
        console.log(res)
      })
  }

}
