import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Galerie } from 'src/app/models/galerie';
import { GalerieService } from 'src/app/services/galerie.service';

@Component({
  selector: 'app-updategalarie',
  templateUrl: './updategalarie.component.html',
  styleUrls: ['./updategalarie.component.scss']
})
export class UpdategalarieComponent implements OnInit {

  constructor(private galserve :  GalerieService , private route : Router ,
    @Inject( MAT_DIALOG_DATA)  public openDialog2 : Galerie) { }

    data : Galerie = this.openDialog2

 ngOnInit(): void {
  
 }

 onSubmit(){
   this.updateGalary();
 }
 
 updateGalary(){
   this.galserve.pdateGalary(this.data).subscribe(
     (res) => {
       console.log(res)
     })
 }

}
