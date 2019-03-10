import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authGard/auth.service';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isloggedIn: boolean = false;
  user: object;
  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.isloggedIn = this.auth.isUserLoogedIn();
  }

  public checkLogin(event: string) {
    if (event) {
      this.isloggedIn = this.auth.isUserLoogedIn();
    }
  }

  public loginUser(user:object){
    if(user){
      console.log(user);
      this.user = user;
    }
  }




}
