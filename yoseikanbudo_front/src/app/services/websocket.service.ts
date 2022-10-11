import { Injectable } from '@angular/core';
import { Chatmessagedto } from '../models/chatmessagedto';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  webSocket !: WebSocket;
  chatMessages : Chatmessagedto[]=[]

  constructor() { }
  public openWebSocket(){
    this.webSocket= new WebSocket('ws://localhost:8089/chat');
    this.webSocket.onopen = (event) => {
      console.log('open :' , event)
    }
    this.webSocket.onmessage = (event) =>{
      const ChatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(ChatMessageDto)
    }
    this.webSocket.onclose = (event) =>{
      console.log('close :' , event);
    }
  } 
  public SendMessage(ChatMessageDto : Chatmessagedto)  : void{
      this.webSocket.send(JSON.stringify(ChatMessageDto))
  }
  public closeWebSocket(){
    this.webSocket.close();
  }




}
