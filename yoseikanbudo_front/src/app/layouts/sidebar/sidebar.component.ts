import { Component, OnInit } from '@angular/core';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private ms : ModeService) { }
  cas = false
  res !: boolean

  ngOnInit(): void {
  }

  switchmode(){
    this.cas =!this.cas
    this.ms.changemode(this.cas)

  }

}
