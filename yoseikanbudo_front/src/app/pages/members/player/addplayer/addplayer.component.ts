import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { Team } from 'src/app/models/team';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.scss']
})
export class AddplayerComponent implements OnInit {

  player : Player = new Player();

  teams !: Team[]

  constructor(private playerserve : PlayerService , private route : Router , private teamserve : TeamService) { }

  ngOnInit(): void {
    this.getAllTeams();
  }

  OnSubmit(){
    this.addPlayer();
    console.log(this.player)
  }

  addPlayer(){

    this.playerserve.addPlayers(this.player).subscribe(
      (res) => {
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.navigate(['/admin/members'] , { queryParamsHandling : "merge"})
      } 
    )  
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
