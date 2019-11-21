import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../Auth.service';
import {User} from '../../../Shared/Models/User.model';
import {last} from 'rxjs/operators';
import {Dni} from '../../../Shared/Models/Dni.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css', '../../../Shared/Style/style.css']
})
export class SignInComponent implements OnInit {
  signIn = new FormGroup({
    email: new FormControl(''),
      password: new FormControl('')
  });

    constructor(private authService: AuthService, private router: Router) {
    }

  ngOnInit() {
  }

  onSignIn() {

      const {email, password} = this.signIn.value;
      const user = new User();
      user.email = email;
      user.password = password;
      user.dni = new Dni(localStorage.getItem('dni'));

      this.authService.signIn(user)
      .pipe(last())
      .subscribe(
        (response: Response) => {
            this.router.navigateByUrl('./login');
        },
        error1 => {console.log(error1); }
      );
  }

}
