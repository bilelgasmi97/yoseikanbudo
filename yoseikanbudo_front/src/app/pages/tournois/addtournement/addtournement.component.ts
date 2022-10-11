import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tournois } from 'src/app/models/tournois';
import { TournoisService } from 'src/app/services/tournois.service';

@Component({
  selector: 'app-addtournement',
  templateUrl: './addtournement.component.html',
  styleUrls: ['./addtournement.component.scss']
})
export class AddtournementComponent implements OnInit {

  tournois : Tournois = new Tournois();

  constructor( private tournoisserve : TournoisService , private route : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.tournois)
    this.addTournois()
    
   }
 
 
 
     addTournois(){
       this.tournoisserve.addTournois(this.tournois).subscribe(
         (res) => {
           this.route.routeReuseStrategy.shouldReuseRoute = () => false;
           this.route.navigate(['/admin/tournois'] , { queryParamsHandling : "merge"})
         }
       )
     } 

}
