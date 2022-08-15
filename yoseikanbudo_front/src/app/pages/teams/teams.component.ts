import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';
import { AddteamComponent } from './addteam/addteam.component';
import { UpdateteamComponent } from './updateteam/updateteam.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  displayedColumns: string[] = ['id_eq', 'nom_eq', 'cote', 'precident_eq','email',
  'fax','phone','entraineur','papier','remarque' , 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog , private teamserve : TeamService ){}

  ngOnInit() {
  this.getAllTeams(); 
  
   
  }

   getAllTeams(){
      this.teamserve.getTeams().subscribe({
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
     this.teamserve.deleteTeams(id).subscribe({
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
    const dialogRef = this.dialog.open(AddteamComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); 
  }
  openDialog2(row :Team) {
     this.dialog.open(UpdateteamComponent , {
      data : row
     }) ;

   
  }

}
