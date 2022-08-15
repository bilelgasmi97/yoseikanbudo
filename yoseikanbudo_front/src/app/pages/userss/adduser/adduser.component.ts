import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  user : Users = new Users();

  constructor( private userserve : UsersService , private route : Router) { }

  ngOnInit(): void {
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

}
