import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coach } from 'src/app/models/coach';
import { CoachService } from 'src/app/services/coach.service';

@Component({
  selector: 'app-addcoach',
  templateUrl: './addcoach.component.html',
  styleUrls: ['./addcoach.component.scss']
})
export class AddcoachComponent implements OnInit {

  coach : Coach = new Coach();

  constructor(private coachserve : CoachService , private route : Router) { }

  ngOnInit(): void {
  }

  OnSubmit(){
    this.addCoach();
  }

  addCoach(){

    this.coachserve.addCoach(this.coach).subscribe(
      (res) => {

        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.navigate(['/admin/members'] , { queryParamsHandling : "merge"})
      } 
    )  
  }  

}
