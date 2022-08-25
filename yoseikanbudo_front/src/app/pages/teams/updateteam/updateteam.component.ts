import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-updateteam',
  templateUrl: './updateteam.component.html',
  styleUrls: ['./updateteam.component.scss']
})
export class UpdateteamComponent implements OnInit {

  constructor(private teamserve :  TeamService , private route : Router ,
    @Inject( MAT_DIALOG_DATA)  public openDialog2 : Team) { }

     data : Team = this.openDialog2

  ngOnInit(): void {
   
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
}
