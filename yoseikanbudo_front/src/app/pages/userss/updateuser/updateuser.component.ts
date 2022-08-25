import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent implements OnInit {

  constructor(private userserve :  UsersService , private route : Router ,
    @Inject( MAT_DIALOG_DATA)  public openDialog2 : Users) { }

     data : Users = this.openDialog2

  ngOnInit(): void {
   
  }

  onSubmit(){
    this.updateTeam();
  }
  
  updateTeam(){
    this.userserve.updateUsers(this.data).subscribe(
      (res) => {
        console.log(res)
      })
  }

}
