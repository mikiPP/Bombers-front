import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css', '../../../Shared/Style/style.css']
})
export class SignInComponent implements OnInit {
  /**
   * PROPERTIES
   */
  signIn = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    shift:  new FormControl('')
  });

  /**
   * CONSTRUCTOR
   */
  constructor() { }

  /**
   * BEHAVIOURS
   */
  ngOnInit() {
  }

  onSignIn() {
    console.warn(this.signIn.value);
  }

}
