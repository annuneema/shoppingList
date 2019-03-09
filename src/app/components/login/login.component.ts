import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../../models/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  constructor(private formBuilder: FormBuilder, private route: Router) { }
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const emailrexg: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordrexg: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    this.formGroup = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern(emailrexg)]],
      'password': ['', [Validators.required, Validators.pattern(passwordrexg)]]
    })
  }

  /* checkPassword(control) {
    let enteredPassword = control.value;
    let pwdCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!pwdCheck.test(enteredPassword) && enteredPassword) ? { 'requirments': true } : null;
  } */


  /* getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Field is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  } */

 /*  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  } */

  public onSubmit() {
    const email = this.formGroup.controls['email'].value;
    console.log('print here -->', email);
    this.route.navigate(['product']);
  }

}
