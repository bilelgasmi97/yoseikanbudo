import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMsg } from '../models/chat-msg';

@Injectable({
  providedIn: 'root'
})
export class ChatMsgService {

  constructor(private http : HttpClient) { }

  sendChatMsg(chatmsg : ChatMsg) : Observable<ChatMsg> {
    return this.http.post<ChatMsg>("http://localhost:8089/chatmsg/send",chatmsg);
  }

  getChatMsgByRecive(reciver : String) :Observable<ChatMsg[]>{
    return this.http.get<ChatMsg[]>("http://localhost:8089/chatmsg/getmsg/"+reciver);
  } 
}
