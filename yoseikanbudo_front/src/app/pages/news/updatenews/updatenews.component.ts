import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-updatenews',
  templateUrl: './updatenews.component.html',
  styleUrls: ['./updatenews.component.scss']
})
export class UpdatenewsComponent implements OnInit {

  constructor(private newsserve :  NewsService , private route : Router ,
    @Inject( MAT_DIALOG_DATA)  public openDialog2 : News) { }

     data : News = this.openDialog2

  ngOnInit(): void {
   
  }

  onSubmit(){
    this.updateTeam();
  }
  
  updateTeam(){
    this.newsserve.pdateNews(this.data).subscribe(
      (res) => {
        console.log(res)
      })
  }

}
