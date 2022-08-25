import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivitesService } from 'src/app/services/activites.service';
import { AddactivitesComponent } from './addactivites/addactivites.component';
import { UpdateactivitesComponent } from './updateactivites/updateactivites.component';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent implements OnInit {

  displayedColumns: string[] = ['ID',
  'Designation',
  'lieu',
  'Date',
  'Responsable',
  'IDType_Stage',
  'ID_Relation',
  'Type_Relation',
  'Visa_direction', 
  'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog , private  activserve :  ActivitesService ){}

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
  openDialog2() {
    const dialogRef = this.dialog.open(UpdateactivitesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }  

}
