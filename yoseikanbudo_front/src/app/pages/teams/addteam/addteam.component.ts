import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coach } from 'src/app/models/coach';
import { Team } from 'src/app/models/team';
import { CoachService } from 'src/app/services/coach.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.scss']
})
export class AddteamComponent implements OnInit {

  team : Team = new Team();

  coachs !: Coach[]

  constructor( private teamserve : TeamService , private route : Router , private coachserve : CoachService) { }

  ngOnInit(): void {
    this.getAllCoachs()
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

     getAllCoachs(){
      this.coachserve.getCoach().subscribe({
      next:(res) => {
        this.coachs = res
        console.log(this.coachs)
      },
      error:(err)=>{
        alert("error while fetching data !!! ")
      } 
    }) 
  } 

}
