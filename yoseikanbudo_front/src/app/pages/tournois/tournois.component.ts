import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tournois } from 'src/app/models/tournois';
import { TournoisService } from 'src/app/services/tournois.service';
import { AddtournementComponent } from './addtournement/addtournement.component';
import { UpdatetournementComponent } from './updatetournement/updatetournement.component';

@Component({
  selector: 'app-tournois',
  templateUrl: './tournois.component.html',
  styleUrls: ['./tournois.component.scss']
})
export class TournoisComponent implements OnInit {

  displayedColumns: string[] = ['id_tr',
  'nom',
  'adresse',
  'date', 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog , private tourserve : TournoisService , private route : Router) { }

  ngOnInit(): void {
    this.getAllTournois();
  }

  getAllTournois(){
      this.tourserve.getTournois().subscribe({
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

  openDialog() {
    const dialogRef = this.dialog.open(AddtournementComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2(row : Tournois) {
    const dialogRef = this.dialog.open(UpdatetournementComponent , {
      data : row
    });

  }

  deleteTournement(id : number){
     this.tourserve.deleteTournois(id).subscribe({
      next:(res) => {
        alert("delete successful ");
        console.log(res)
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.navigate(['/admin/tournois'] , { queryParamsHandling : "merge"})
      },
      error:(err)=>{
        alert("error while fetching data !!! ")
      }
    }) 

}
}
