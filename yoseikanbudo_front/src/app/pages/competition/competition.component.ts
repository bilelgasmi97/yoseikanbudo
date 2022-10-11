import { Component, OnInit , ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Competition } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition.service';
import { AddcompetitionComponent } from './addcompetition/addcompetition.component';
import { UpdatecompetitionComponent } from './updatecompetition/updatecompetition.component';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  displayedColumns: string[] = ['id', 'cblanc', 'cbleu','cgang', 'cperd' , 
  'gang' , 'gposit' ,'id_tr' ,'nblanc' ,'obs' ,'perd' ,'posit' , 'pposit' ,  'tableau',  'action'];
  
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;  

  constructor(private dialog : MatDialog , private prodserve :  CompetitionService ,
    private route : Router) {}

    ngOnInit() {
      this.getAllCompetions();
      
       
      }
    
      getAllCompetions(){
        this.prodserve.getCompetition().subscribe({
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
    
      deletecompetition(id : number){
        this.prodserve.deleteCompetition(id).subscribe({
          next:(res) => {
            alert("delete successful ");
            console.log(res)
            this.route.routeReuseStrategy.shouldReuseRoute = () => false;
            this.route.navigate(['/admin/competition'] , { queryParamsHandling : "merge"})
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
        const dialogRef = this.dialog.open(AddcompetitionComponent);
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }
      openDialog2(row : Competition) {
         this.dialog.open(UpdatecompetitionComponent , {
          data :row
         });
      }
    

}
