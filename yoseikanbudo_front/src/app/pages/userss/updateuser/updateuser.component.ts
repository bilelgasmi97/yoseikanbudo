import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team';
import { UserType } from 'src/app/models/user-type';
import { Users } from 'src/app/models/users';
import { TeamService } from 'src/app/services/team.service';
import { UserTypeService } from 'src/app/services/user-type.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent implements OnInit {

  constructor(private userserve :  UsersService , private route : Router ,
    @Inject( MAT_DIALOG_DATA)  public openDialog2 : Users ,
    private usertypeserve : UserTypeService ,
     private teamserve : TeamService) { }

     user : Users = this.openDialog2

     usert !: UserType[];
     teams!: Team[];

    

  ngOnInit(): void {
    this.getAllUserType();
    this.getAllTeams();
    
 
  }

  onSubmit(){
    this.updateTeam();

  }
  
  updateTeam(){
    this.userserve.updateUsers(this.user).subscribe(
      (res) => {
        console.log(res)
      })
  }

  getAllUserType(){
    this.usertypeserve.getAllUserType().subscribe(
      (res) => {
       this.usert = res;
      }
    )
  }
  
  getAllTeams(){
    this.teamserve.getTeams().subscribe(
    (res) => {
     this.teams = res;
     
    } 
  ) 
}

}
