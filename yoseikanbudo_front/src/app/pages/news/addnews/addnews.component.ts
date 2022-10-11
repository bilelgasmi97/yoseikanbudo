import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.scss']
})
export class AddnewsComponent implements OnInit {

  news : News = new News();

  constructor( private newsserve : NewsService , private route : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.news)
    this.addNews()
    
   }
 
 
 
     addNews(){
       this.newsserve.addNews(this.news).subscribe(
         (res) => {
           this.route.routeReuseStrategy.shouldReuseRoute = () => false;
           this.route.navigate(['/admin/news'] , { queryParamsHandling : "merge"})
         }
       )
     } 


}
