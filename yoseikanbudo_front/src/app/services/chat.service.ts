import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor( private http : HttpClient) { }


  getChat(){
    return this.http.get<any>("http://localhost:8080/ChatsController/");
  }
}
