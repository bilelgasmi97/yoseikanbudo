import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arbitrator } from 'src/app/models/arbitrator';
import { ArbitratorService } from 'src/app/services/arbitrator.service';

@Component({
  selector: 'app-addarbitrator',
  templateUrl: './addarbitrator.component.html',
  styleUrls: ['./addarbitrator.component.scss']
})
export class AddarbitratorComponent implements OnInit {

  arbitre : Arbitrator = new Arbitrator();

  constructor(private arbitreserve : ArbitratorService , private route : Router) { }

  ngOnInit(): void {
  }

  OnSubmit(){
    this.addArbitrator();
  }

  addArbitrator(){

    this.arbitreserve.addArbitrator(this.arbitre).subscribe(
      (res) => {

        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.navigate(['/admin/members'] , { queryParamsHandling : "merge"})
      } 
    )  
  }  

}
