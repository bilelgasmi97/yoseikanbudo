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
 

  FileSelect !: File
  


  constructor(private prodserve :  ProductService , private route : Router) { }

  

  ngOnInit(): void {
   
  } 

  onSubmit(){
   this.addProduct()
   /* console.log(this.FileUser) */

  
   
  }

  gotoproductlist(){
    
  }

    addProduct(){
      const formData = new FormData();
      formData.append('product' , JSON.stringify(this.product));
      formData.append('file' , this.FileSelect);
      console.log(formData)
      this.prodserve.addProducts(formData).subscribe(
        (res) => {

          this.route.routeReuseStrategy.shouldReuseRoute = () => false;
          this.route.navigate(['/admin/products'] , { queryParamsHandling : "merge"})
        } 
      )  
    }  
  

      OnSelectedFile(event : any){
        this.FileSelect = <File>event.target.files[0];


      /* if(event.target.files.length < 0){
        const file = event.target.files[0];
        console.log(file)
        this.FileUser = file;
        var reader = new FileReader;
        this.imgpath = file;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.imgUrl = reader.result;
        }
      } */
    }

} 
