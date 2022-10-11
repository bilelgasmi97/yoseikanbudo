import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activites';
import { ActivitesService } from 'src/app/services/activites.service';

@Component({
  selector: 'app-updateactivites',
  templateUrl: './updateactivites.component.html',
  styleUrls: ['./updateactivites.component.scss']
})
export class UpdateactivitesComponent implements OnInit {

  constructor(private prodserve :  ActivitesService , private route : Router ,
    @Inject( MAT_DIALOG_DATA)  public openDialog2 : Activity) { }

    data : Activity = this.openDialog2

 ngOnInit(): void {
  
 }

 onSubmit(){
   this.updateProduct();
 }
 
 updateProduct(){
   this.prodserve.updateActivity(this.data).subscribe(
     (res) => {
       console.log(res)
     })
 }


}
