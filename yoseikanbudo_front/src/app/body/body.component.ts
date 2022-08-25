import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  mode = false

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
  }

}
