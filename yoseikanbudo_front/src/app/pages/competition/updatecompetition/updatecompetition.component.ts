import { Component,  Inject, OnInit ,  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Competition } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-updatecompetition',
  templateUrl: './updatecompetition.component.html',
  styleUrls: ['./updatecompetition.component.scss']
})
export class UpdatecompetitionComponent implements OnInit {

  constructor(private compserve : CompetitionService , 
     @Inject( MAT_DIALOG_DATA)  public openDialog2 : Competition  ) { }

   data : Competition = this.openDialog2

  ngOnInit(): void {
  }

  onSubmit(){
    this.updateTeam();
  }
  
  updateTeam(){
    this.compserve.pdateCompetition(this.data).subscribe(
      (res) => {
        console.log(res)
      })
  }

}
