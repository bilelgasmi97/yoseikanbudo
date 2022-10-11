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

  FileSelect !: File



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
      const formData = new FormData();
      formData.append('galery' , JSON.stringify(this.galary));
      formData.append('file' , this.FileSelect);
      console.log(formData)
      this.galserve.addGalary(formData).subscribe(
        (res) => {
          this.route.routeReuseStrategy.shouldReuseRoute = () => false;
          this.route.navigate(['/admin/galary'] , { queryParamsHandling : "merge"})
        }
      )
    } 

    OnSelectedFile(event : any){
      this.FileSelect = <File>event.target.files[0];
    }
  

}
