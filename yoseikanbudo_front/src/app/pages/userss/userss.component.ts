import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/user.service';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

@Component({
  selector: 'app-userss',
  templateUrl: './userss.component.html',
  styleUrls: ['./userss.component.scss']
})
export class UserssComponent implements OnInit {

  displayedColumns: string[] = [
  'user_id',
  'user_name',
  'user_lastname',
  'user_email',
  'user_password',
  'user_type',
  'user_team',
  'user_birthday',
  'createdAt',
  'user_phone',
  'Adresse',
  'Lieu_naiss',
  'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog , private userserve : UsersService){}

  ngOnInit() {
  this.getAllUsers();
  
   
  }

  getAllUsers(){
    this.userserve.getAllUsers().subscribe({
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
     this.userserve.deleteUsers(id).subscribe({
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
     const dialogRef = this.dialog.open(AdduserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); 
  }
  openDialog2(row : Users) {
    const dialogRef = this.dialog.open(UpdateuserComponent , {
      data : row
    });

   
  }

}
