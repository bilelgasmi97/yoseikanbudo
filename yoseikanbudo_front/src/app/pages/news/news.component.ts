import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';
import { AddnewsComponent } from './addnews/addnews.component';
import { UpdatenewsComponent } from './updatenews/updatenews.component';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  displayedColumns: string[] = ['news_id', 'news_title', 'news_date','pic', 'pic_thumb' , 
  'type_fav' , 'categorie' , 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog , private newsserve :  NewsService , private route : Router){}

  ngOnInit() {
  this.getAllNews();
  
   
  }

  getAllNews(){
    this.newsserve.getNews().subscribe({
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
    this.newsserve.deleteNews(id).subscribe({
      next:(res) => {
        alert("delete successful ");
        console.log(res)
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.navigate(['/admin/news'] , { queryParamsHandling : "merge"})
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
    const dialogRef = this.dialog.open(AddnewsComponent) 
      
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); 
  }
  openDialog2(row : News) {
    this.dialog.open(UpdatenewsComponent , {
     data :row
    });
 }


}
