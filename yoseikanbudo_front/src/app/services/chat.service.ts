import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatMessage } from '../models/chat-model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor( private http : HttpClient) { }


  getAllChat(){
    return this.http.get<ChatMessage>("http://localhost:8080/ChatsController/");
  }
}
