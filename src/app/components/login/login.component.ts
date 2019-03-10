import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/authGard/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private user: any;
  private NoUserMatch: boolean;
  public isUserLoggedIn: boolean;
  formGroup: FormGroup;
  @Output() LoggedIn = new EventEmitter();
  @Output() User = new EventEmitter();
  constructor(private formBuilder: FormBuilder, private route: Router, private users: UsersService, private auth: AuthService) { }
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const emailrexg: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordrexg: RegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/;
    this.formGroup = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern(emailrexg)]],
      'password': ['', [Validators.required, Validators.pattern(passwordrexg)]]
    })
  }
  public onSubmit() {
    const email = this.formGroup.controls['email'].value;
    const password = this.formGroup.controls['password'].value;
    this.users.getUsers().filter(user => {
      if (user.username == email && user.password == password) {
        return this.user = user;
      }
    })
    if (this.user !== undefined) {
      this.auth.loggedInUser(this.user);
      this.LoggedIn.emit('true');
      this.User.emit(this.user);
    } else {
      this.NoUserMatch = true;
    }

  }

}
