import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Users } from 'src/app/models/users';

import { ChatService } from 'src/app/services/chat.service';
import { UsersService } from 'src/app/services/user.service';
import { EmailappComponent } from './emailapp/emailapp.component';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})


export class ChatMessageComponent implements OnInit {

  users !: Users[]; 

  typesOfShoes: string[] = [ 'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Boots', 'Clogs','Sneakers','Boots', 'Clogs', ];

  constructor( private chatserve : ChatService , private userserve : UsersService ,
     private dialog: MatDialog) { }


  ngOnInit(): void {
    this.getAllUsers();
   
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

  getAllUsers(){
    this.userserve.getAllUsers().subscribe( 
      (res) =>{
        alert("all user exist");
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
  

}
