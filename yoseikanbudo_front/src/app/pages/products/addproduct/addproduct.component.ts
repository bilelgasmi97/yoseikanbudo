import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  productForm !: FormGroup;



  constructor(private prodserve :  ProductService , private formbuilder : FormBuilder) { }

  

  ngOnInit(): void {
    this.productForm =  this.formbuilder.group({
      product_name : ['', Validators.required],
      product_prix : ['', Validators.required]
     
    })
  } 

  onSubmit(){
    this.prodserve.addProducts(this.productForm.value).subscribe({
      next:(res) => {
        alert("seccesuful")
      },
      error(err) {
        alert("eroor !!!")
      },
    })
  }

    addProduct(){
     /*  this.prodserve.addProducts(this.productForm.value).subscribe({
        next:(res) => {
          alert("seccesuful")
        },
        error(err) {
          alert("eroor !!!")
        },
      }) */
  }  

} 
