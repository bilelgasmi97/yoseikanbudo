import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailDetails } from 'src/app/models/email-details';
import { EmailappService } from 'src/app/services/emailapp.service';

@Component({
  selector: 'app-emailapp',
  templateUrl: './emailapp.component.html',
  styleUrls: ['./emailapp.component.scss']
})
export class EmailappComponent implements OnInit {

  maildetails : EmailDetails =  new EmailDetails();

  test !: Object

  constructor(private mailserve : EmailappService  , private route : Router) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    console.log(this.maildetails)
    /*  this.sendSimpleMail()  */
    this.sendMailWithAttachment();
   console.log(this.test)
   this.getimagepath(event) 
    
   }
 
   gotoproductlist(){
     
   }
 
     sendSimpleMail(){
       this.mailserve.sendSimpleMail(this.maildetails).subscribe(
         (res) => {
           this.route.routeReuseStrategy.shouldReuseRoute = () => false;
           this.route.navigate(['/admin/galery'] , { queryParamsHandling : "merge"})
         }
       )
     } 
     sendMailWithAttachment(){
      this.mailserve.sendSimpleMailwithAttachment(this.maildetails).subscribe(
        (res) => {
          this.test = res.attachment
          this.route.routeReuseStrategy.shouldReuseRoute = () => false;
          this.route.navigate(['/admin/galery'] , { queryParamsHandling : "merge"})
        }
      )
    } 

    getimagepath(event : any){
      console.log(event)
    }

}
