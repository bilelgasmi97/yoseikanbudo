import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})


export class ChatMessageComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Boots', 'Clogs','Sneakers','Boots', 'Clogs', ];

  constructor( private chatserve : ChatService) { }

  ngOnInit(): void {
    this.getAllChatMessages();
  }

  getAllChatMessages(){
    this.chatserve.getChat().subscribe({
      next:(res) =>{
        alert("hi");
        console.log(res)
      },
      error(err) {
        alert("error")
      },
    })
  }
  

}
