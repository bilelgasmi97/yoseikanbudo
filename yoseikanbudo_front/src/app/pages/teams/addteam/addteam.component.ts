import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.scss']
})
export class AddteamComponent implements OnInit {

  team : Team = new Team();

  constructor( private teamserve : TeamService , private route : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.team)
    this.addTeam()
    
   }
 
 
 
     addTeam(){
       this.teamserve.addTeams(this.team).subscribe(
         (res) => {
           this.route.routeReuseStrategy.shouldReuseRoute = () => false;
           this.route.navigate(['/admin/teams'] , { queryParamsHandling : "merge"})
         }
       )
     } 

}
