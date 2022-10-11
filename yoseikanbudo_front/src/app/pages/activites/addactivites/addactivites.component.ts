import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activites';
import { ActivitesService } from 'src/app/services/activites.service';

@Component({
  selector: 'app-addactivites',
  templateUrl: './addactivites.component.html',
  styleUrls: ['./addactivites.component.scss']
})
export class AddactivitesComponent implements OnInit {

  activity : Activity = new Activity();


  constructor(private tournoisserve : ActivitesService , private route : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.activity)
    this.addTournois()
    
   }
 
 
 
     addTournois(){
       this.tournoisserve.addActivity(this.activity).subscribe(
         (res) => {
           this.route.routeReuseStrategy.shouldReuseRoute = () => false;
           this.route.navigate(['/admin/activites'] , { queryParamsHandling : "merge"})
         }
       )
     } 

}
