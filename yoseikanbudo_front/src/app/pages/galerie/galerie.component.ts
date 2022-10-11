import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Galerie } from 'src/app/models/galerie';
import { GalerieService } from 'src/app/services/galerie.service';

import { AddgalarieComponent } from './addgalarie/addgalarie.component';
import { UpdategalarieComponent } from './updategalarie/updategalarie.component';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})


export class GalerieComponent implements OnInit {

  displayedColumns: string[] = ['id_gal', 'description', 'path', 'dt','categorie','action'];
  dataSource !: MatTableDataSource<Galerie>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog , private galserve : GalerieService  ,
    private route : Router){}

  ngOnInit() {
  this.getAllGaleies();
  
   
  }


  getAllGaleies(){
    this.galserve.getGalary().subscribe({
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
    this.galserve.deleteGalary(id).subscribe({
      next:(res) => {
        alert("delete successful ");
        console.log(res)
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.navigate(['/admin/galary'] , { queryParamsHandling : "merge"})
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
    const dialogRef = this.dialog.open(AddgalarieComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2(row : Galerie) {
     this.dialog.open(UpdategalarieComponent , {
      data :row
     });
  }
}
