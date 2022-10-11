import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { Coach } from 'src/app/models/coach';
import { ArbitratorService } from 'src/app/services/arbitrator.service';
import { CoachService } from 'src/app/services/coach.service';
import { PlayerService } from 'src/app/services/player.service';
import { AddarbitratorComponent } from './arbitrator/addarbitrator/addarbitrator.component';
import { UpdatearbitratorComponent } from './arbitrator/updatearbitrator/updatearbitrator.component';
import { AddcoachComponent } from './coach/addcoach/addcoach.component';
import { UpdatecoachComponent } from './coach/updatecoach/updatecoach.component';
import { AddplayerComponent } from './player/addplayer/addplayer.component';
import { UpdateplayerComponent } from './player/updateplayer/updateplayer.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

 

  displayedColumns: string[] = ['id', 'nom', 'phone', 'email_ent', 'action'];
  dataSource !: MatTableDataSource<Coach>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns02: string[] = ['id_joueur', 'name', 'prenom', 'date_naissance', 'equipe', 'adresse' , 
  'phone' , 'email' , 'action'];
  dataSource02 !: MatTableDataSource<any>;

  displayedColumns03: string[] = ['id_arbitre', 'name', 'prenom', 'grade', 'cote', 'email' , 
  'phone'  , 'action'];
  dataSource03 !: MatTableDataSource<any>;

 




  @ViewChild(MatPaginator) paginator02!: MatPaginator;
  @ViewChild(MatSort) sort02!: MatSort;

  @ViewChild(MatPaginator) paginator03!: MatPaginator;
  @ViewChild(MatSort) sort03!: MatSort;

  constructor(private dialog: MatDialog , private coachserve : CoachService , private route : Router ,
     private playerservice : PlayerService , private arbitreserve : ArbitratorService) { }

  ngOnInit(): void {
    this.getAllCoaches()
    this.getAllPlayers();
    this.getAllAlbitrators();
  }


  getAllCoaches(){
    this.coachserve.getCoach().subscribe({
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

  deleteCoach(id : number){
    this.coachserve.deleteCoach(id).subscribe({
      next:(res) => {
        alert("delete successful ");
        console.log(res)
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.navigate(['/admin/members'] , { queryParamsHandling : "merge"})
      },
      error:(err)=>{
        alert("error while fetching data !!! ")
      }
    })
  }

  deleteplayer(id : number){
    this.playerservice.deletePlayers(id).subscribe({
      next:(res) => {
        alert("delete successful ");
        console.log(res)
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.navigate(['/admin/members'] , { queryParamsHandling : "merge"})
      },
      error:(err)=>{
        alert("error while fetching data !!! ")
      }
    })
  }

  deleteArbitre(id : number){
    this.arbitreserve.deleteArbitrator(id).subscribe({
      next:(res) => {
        alert("delete successful ");
        console.log(res)
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.navigate(['/admin/members'] , { queryParamsHandling : "merge"})
      },
      error:(err)=>{
        alert("error while fetching data !!! ")
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddcoachComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2(row : Coach) {
     this.dialog.open( UpdatecoachComponent, {
      data :row
     });
  }


  getAllPlayers(){
    this.playerservice.getPlayers().subscribe({
      next:(res) => {
        this.dataSource02 = new MatTableDataSource(res);
        this.dataSource02.paginator = this.paginator02;
        this.dataSource02.sort = this.sort02;
        console.log(this.dataSource02.filteredData)
      },
      error:(err)=>{
        alert("error while fetching data !!! ")
      }
    })
  }

  getAllAlbitrators(){
    this.arbitreserve.getAllArbitrator().subscribe({
      next:(res) => {
        this.dataSource03 = new MatTableDataSource(res);
        this.dataSource03.paginator = this.paginator03;
        this.dataSource03.sort = this.sort03;
        console.log(this.dataSource02.filteredData)
      },
      error:(err)=>{
        alert("error while fetching data !!! ")
      }
    })
  }

  openDialog03() {
    const dialogRef = this.dialog.open(AddplayerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog04(row : Coach) {
     this.dialog.open( UpdateplayerComponent, {
      data :row
     });
  }

  openDialog05() {
    const dialogRef = this.dialog.open(AddarbitratorComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog06(row : Coach) {
     this.dialog.open( UpdatearbitratorComponent, {
      data :row
     });
  }

}
