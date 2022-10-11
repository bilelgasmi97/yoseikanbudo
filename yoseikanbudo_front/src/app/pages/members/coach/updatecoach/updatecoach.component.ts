import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Coach } from 'src/app/models/coach';
import { CoachService } from 'src/app/services/coach.service';

@Component({
  selector: 'app-updatecoach',
  templateUrl: './updatecoach.component.html',
  styleUrls: ['./updatecoach.component.scss']
})
export class UpdatecoachComponent implements OnInit {

  constructor(private coachserve :  CoachService , private route : Router ,
    @Inject( MAT_DIALOG_DATA)  public openDialog2 : Coach) { }

    data : Coach = this.openDialog2

 ngOnInit(): void {
  
 }

 OnSubmit(){
   this.updateCoach();
 }
 
 updateCoach(){
   this.coachserve.pdateCoach(this.data).subscribe(
     (res) => {
       console.log(res)
     })
 }
}
