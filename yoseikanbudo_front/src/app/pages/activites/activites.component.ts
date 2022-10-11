import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activites';
import { ActivitesService } from 'src/app/services/activites.service';
import { AddactivitesComponent } from './addactivites/addactivites.component';
import { UpdateactivitesComponent } from './updateactivites/updateactivites.component';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent implements OnInit {

  displayedColumns: string[] = [
  'id',
  'designation',
  'lieu',
  'date',
  'responsable',
  'ID_Relation',
  'visa_direction', 
  'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog , private  activserve :  ActivitesService , private route : Router ){}

  ngOnInit() {
  this.getAllActivitess();
  
   
  }

  getAllActivitess(){
    this.activserve.getAllActivites().subscribe({
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
    this.activserve.deleteActivites(id).subscribe({
      next:(res) => {
        alert("delete successful ");
        console.log(res)
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.navigate(['/admin/activites'] , { queryParamsHandling : "merge"})
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
    const dialogRef = this.dialog.open(AddactivitesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2(row : Activity) {
    this.dialog.open(UpdateactivitesComponent , {
     data :row
    });
 }

}
