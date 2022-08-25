import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http : HttpClient) { }

  getNews() : Observable<News[]> {
    return this.http.get<News[]>("http://localhost:8089/news/all");
  }

  addNews(news : News) : Observable<News> {
    return this.http.post<News>("http://localhost:8089/news/new",news);
  }

  pdateNews(data : News) : Observable<News>{
    return this.http.put<News>("http://localhost:8089/news/update",data);
  } 

  deleteNews(id : number)  : Observable<News>{
    return this.http.delete<News>("http://localhost:8089/news/delete/"+id );
  }

}
