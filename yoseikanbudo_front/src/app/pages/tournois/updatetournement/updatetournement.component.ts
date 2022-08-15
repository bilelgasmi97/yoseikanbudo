import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Tournois } from 'src/app/models/tournois';
import { TournoisService } from 'src/app/services/tournois.service';


@Component({
  selector: 'app-updatetournement',
  templateUrl: './updatetournement.component.html',
  styleUrls: ['./updatetournement.component.scss']
})
export class UpdatetournementComponent implements OnInit {

  constructor(private Tournoisserve :  TournoisService , private route : Router ,
    @Inject( MAT_DIALOG_DATA)  public openDialog2 : Tournois) { }

     data : Tournois = this.openDialog2

  ngOnInit(): void {
   
  }

  onSubmit(){
    this.updateTournois();
  }
  
  updateTournois(){
    this.Tournoisserve.updateTournois(this.data).subscribe(
      (res) => {
        console.log(res)
      })
  }
}
