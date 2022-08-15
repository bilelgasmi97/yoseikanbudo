
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Product } from 'src/app/models/product-model';
import { ProductService } from 'src/app/services/product.service';

import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';


/**
 * @Title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})



export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['product_id', 'product_name', 'product_prix', 'product_image', 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog , private prodserve :  ProductService ,
    private route : Router){}

  ngOnInit() {
  this.getAllProducts();
  
   
  }

  getAllProducts(){
    this.prodserve.getProducts().subscribe({
      next:(res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource.filteredData)
      },
      error:(err)=>{
        alert("error while fetching data !!! ")
      }
    })
  }

  deleteproduct(id : number){
    this.prodserve.deleteProducts(id).subscribe({
      next:(res) => {
        alert("delete successful ");
        console.log(res)
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.navigate(['/admin/products'] , { queryParamsHandling : "merge"})
      },
      error:(err)=>{
        alert("error while fetching data !!! ")
      }
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddproductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2(row : Product) {
     this.dialog.open(UpdateproductComponent , {
      data :row
     });
  }

}





