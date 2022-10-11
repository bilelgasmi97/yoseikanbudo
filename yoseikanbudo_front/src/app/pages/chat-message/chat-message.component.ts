import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChatMsg } from 'src/app/models/chat-msg';
import { Chatmessagedto } from 'src/app/models/chatmessagedto';
import { Users } from 'src/app/models/users';
import { ChatMsgService } from 'src/app/services/chat-msg.service';

import { ChatService } from 'src/app/services/chat.service';
import { UsersService } from 'src/app/services/user.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { EmailappComponent } from './emailapp/emailapp.component';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})


export class ChatMessageComponent implements OnInit , OnDestroy {

  users !: Users[];
  nikename : string = "Stranger"

  username!: string
  
  chatmsgs !: ChatMsg[]

  typesOfShoes: string[] = [ 'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Boots', 'Clogs','Sneakers','Boots', 'Clogs', ];

  constructor( private chatserve : ChatService , private userserve : UsersService ,
     private dialog: MatDialog , public wsseve : WebsocketService , private chatmsgserve : ChatMsgService , private route : Router) { }



      


  ngOnInit(): void {
    this.getAllUsers();
    this.wsseve.openWebSocket();
    console.log(this.username)
   
  }

  getAllChatMessages(){
    this.chatserve.getAllChat().subscribe({
      next:(res) =>{
        alert("hi");
        console.log(res)
      },
      error(err) {
        alert("error")
      },
    })
  }

  getusername(event : any){
    this.username = event;
    this.chatmsgserve.getChatMsgByRecive(this.username).subscribe({
      next:(res) => {
        this.chatmsgs= res;
        
      }
    })
   
    
   
    
  }

  getAllUsers(){
    this.userserve.getAllUsers().subscribe( 
      (res) =>{
        this.users = res; 
        console.log(res)
      } 
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(EmailappComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy() : void{
    this.wsseve.closeWebSocket();
  }

  onSubmit02(userform : NgForm)  {
    this.nikename = userform.value.user;
    console.log(this.nikename)
     
   }

  onSubmit(msgform : NgForm)  {

    

      /* ----------------Connect via Simple Chat by choosing a spesifec user ----------*/
    if(this.username!=null){
      const chatmsg = new ChatMsg(this.username , msgform.value.message);
      msgform.control.reset();
      this.chatmsgserve.sendChatMsg(chatmsg).subscribe(
        (res) => {
          
        }
      )
    }
    else{
      /* ------------------connect via ChatRoom----------------------------------------- */
      const ChatMessageDto = new Chatmessagedto(this.nikename , msgform.value.message);
      this.wsseve.SendMessage(ChatMessageDto);  
    }
    
  }
 
  

}
