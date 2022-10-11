import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Arbitrator } from 'src/app/models/arbitrator';
import { ArbitratorService } from 'src/app/services/arbitrator.service';

@Component({
  selector: 'app-updatearbitrator',
  templateUrl: './updatearbitrator.component.html',
  styleUrls: ['./updatearbitrator.component.scss']
})
export class UpdatearbitratorComponent implements OnInit {

  constructor(private arbitreserve :  ArbitratorService   , private route : Router ,
    @Inject( MAT_DIALOG_DATA)  public openDialog06 : Arbitrator) { }

    arbitre : Arbitrator = this.openDialog06

 ngOnInit(): void {
  
 }

 OnSubmit(){
   this.updateCoach();
 }
 
 updateCoach(){
   this.arbitreserve.pdateArbitrator(this.arbitre).subscribe(
     (res) => {
       console.log(res)
     })
 }

}
