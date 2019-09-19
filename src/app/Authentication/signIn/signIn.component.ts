import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../Auth.service';
import {User} from '../../../Shared/Models/User.model';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css', '../../../Shared/Style/style.css']
})
export class SignInComponent implements OnInit {
  signIn = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    dni:  new FormControl(''),
    turn: new FormControl('')
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignIn() {
    this.authService.signIn(new User(this.signIn.value.dni , this.signIn.value.name, this.signIn.value.email,
      this.signIn.value.password , this.signIn.value.turn ))
      .pipe(last())
      .subscribe(
        (response: Response) => {
          console.log(response);
        },
        error1 => {console.log(error1); }
      );
  }

}
