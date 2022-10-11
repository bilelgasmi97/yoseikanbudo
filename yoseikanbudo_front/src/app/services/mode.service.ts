import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  resf !: boolean
  str !: string

  constructor() { }

  changemode(mode : boolean){
    this.resf = mode
    console.log(this.resf);
    if(this.resf == true){
      this.str = "darkmode"
    }
    else{
      this.str = "yeah ok lol"
    }
    console.log(this.str)
  }

  
}
