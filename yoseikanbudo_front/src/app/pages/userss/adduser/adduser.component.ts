import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team';
import { UserType } from 'src/app/models/user-type';
import { Users } from 'src/app/models/users';
import { TeamService } from 'src/app/services/team.service';
import { UserTypeService } from 'src/app/services/user-type.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  user : Users = new Users();

  usert !: UserType[];

 

  teams!: Team[];

  birthday !: any

  constructor( private userserve : UsersService , private route : Router , private usertypeserve : UserTypeService ,
     private teamserve : TeamService) { }

  ngOnInit(): void {
    this.getAllUserType();
    this.getAllTeams();
    
  }

  onSubmit(){
    console.log(this.user)
    this.addUser()

    
    
   }
 
 
 
     addUser(){
       this.userserve.addUsers(this.user).subscribe(
         (res) => {
           this.route.routeReuseStrategy.shouldReuseRoute = () => false;
           this.route.navigate(['/admin/users'] , { queryParamsHandling : "merge"})
         }
       )
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
