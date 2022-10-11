import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { Team } from 'src/app/models/team';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-updateplayer',
  templateUrl: './updateplayer.component.html',
  styleUrls: ['./updateplayer.component.scss']
})
export class UpdateplayerComponent implements OnInit {

  teams !: Team[]

  constructor(private playerserve :  PlayerService , private route : Router ,
    @Inject( MAT_DIALOG_DATA)  public openDialog04 : Player , private teamserve : TeamService) { }

    player : Player = this.openDialog04

 ngOnInit(): void {
    this.getAllTeams();
 }

 OnSubmit(){
   this.updatePlayer();
 } 
 
 updatePlayer(){
   this.playerserve.updatePlayers(this.player).subscribe(
     (res) => {
       console.log(res)
     })
 }

 getAllTeams(){
  this.teamserve.getTeams().subscribe({
  next:(res) => {
    this.teams = res
  },
  error:(err)=>{
    alert("error while fetching data !!! ")
  } 
}) 
} 

}
