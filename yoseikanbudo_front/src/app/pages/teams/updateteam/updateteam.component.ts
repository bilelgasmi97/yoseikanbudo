import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Coach } from 'src/app/models/coach';
import { Team } from 'src/app/models/team';
import { CoachService } from 'src/app/services/coach.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-updateteam',
  templateUrl: './updateteam.component.html',
  styleUrls: ['./updateteam.component.scss']
})
export class UpdateteamComponent implements OnInit {

  coachs !: Coach[]

  constructor(private teamserve :  TeamService , private route : Router ,
    @Inject( MAT_DIALOG_DATA)  public openDialog2 : Team  , private coachserve : CoachService) { }

     data : Team = this.openDialog2

  ngOnInit(): void {
   this.getAllCoachs();
  }

  onSubmit(){
    this.updateTeam();
  }
  
  updateTeam(){
    this.teamserve.updateTeams(this.data).subscribe(
      (res) => {
        console.log(res)
      })
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
