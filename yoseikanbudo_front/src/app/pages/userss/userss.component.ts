import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-userss',
  templateUrl: './userss.component.html',
  styleUrls: ['./userss.component.scss']
})
export class UserssComponent implements OnInit {

  displayedColumns: string[] = ['product_id', 'product_name', 'product_prix', 'product_image', 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog ){}

  ngOnInit() {
  this.getAllProducts();
  
   
  }

  getAllProducts(){
    /* this.prodserve.getProducts().subscribe({
      next:(res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource.filteredData)
      },
      error:(err)=>{
        alert("error while fetching data !!! ")
      }
    }) */
  }

  deleteproduct(id : number){
    /* this.prodserve.deleteProducts(id).subscribe({
      next:(res) => {
        alert("delete successful ");
        console.log(res)
      },
      error:(err)=>{
        alert("error while fetching data !!! ")
      }
    }) */
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog() {
    /* const dialogRef = this.dialog.open(AddproductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); */
  }
  openDialog2() {
    /* const dialogRef = this.dialog.open(UpdateproductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); */
  }

}
