import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competition } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-addcompetition',
  templateUrl: './addcompetition.component.html',
  styleUrls: ['./addcompetition.component.scss']
})
export class AddcompetitionComponent implements OnInit {

  combat : Competition =  new Competition();

  constructor(private prodserve :  CompetitionService , private route : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.addCompetition()
    
   }

  addCompetition(){
    this.prodserve.addCompetition(this.combat).subscribe(
      (res) => {
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.navigate(['/admin/competition'] , { queryParamsHandling : "merge"})
      }
    )
  } 

}
