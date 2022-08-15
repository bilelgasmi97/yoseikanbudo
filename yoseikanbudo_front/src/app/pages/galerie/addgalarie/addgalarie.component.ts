import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Galerie } from 'src/app/models/galerie';
import { GalerieService } from 'src/app/services/galerie.service';

@Component({
  selector: 'app-addgalarie',
  templateUrl: './addgalarie.component.html',
  styleUrls: ['./addgalarie.component.scss']
})
export class AddgalarieComponent implements OnInit {

  galary : Galerie =  new Galerie();



  constructor(private galserve :  GalerieService , private route : Router) { }

  

  ngOnInit(): void {
   
  } 

  onSubmit(){
   console.log(this.galary)
   this.addGalerie()
   
  }

  gotoproductlist(){
    
  }

    addGalerie(){
      this.galserve.addGalary(this.galary).subscribe(
        (res) => {
          this.route.routeReuseStrategy.shouldReuseRoute = () => false;
          this.route.navigate(['/admin/galary'] , { queryParamsHandling : "merge"})
        }
      )
    } 
  

}
