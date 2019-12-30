import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../Auth.service';
import {User} from '../../../Shared/Models/User.model';
import {last} from 'rxjs/operators';
import {Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../Shared/Style/style.css']
})
export class LoginComponent  {

    // This variable is to know if the login have been realized
    tried : Boolean;

    login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) {
      this.tried = false;
  }

  onLogin() {

    const {email, password} = this.login.value;
    const user = new User();
    user.email = email;
    user.password = password;

    this.authService.login(user)
        .pipe(last())
        .subscribe(
            (data: HttpResponse<any>) => {
              localStorage.setItem("token",data.headers.get('authorization'));
              this.router.navigateByUrl('/home');
            },
            () => this.tried = true
        );

  }
}
