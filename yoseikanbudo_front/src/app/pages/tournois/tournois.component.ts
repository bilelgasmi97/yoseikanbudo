import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddtournementComponent } from './addtournement/addtournement.component';
import { UpdatetournementComponent } from './updatetournement/updatetournement.component';

@Component({
  selector: 'app-tournois',
  templateUrl: './tournois.component.html',
  styleUrls: ['./tournois.component.scss']
})
export class TournoisComponent implements OnInit {

  displayedColumns: string[] = ['product_id', 'product_name', 'product_prix', 'product_image', 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getAllTournois(){
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

  openDialog() {
    const dialogRef = this.dialog.open(AddtournementComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2() {
    const dialogRef = this.dialog.open(UpdatetournementComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteTournement(id : number){
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
}
