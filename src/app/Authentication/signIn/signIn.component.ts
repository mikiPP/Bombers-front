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

    tried: Boolean;
    doesPasswordMatch: Boolean;

    signIn = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
        passwordSecurity: new FormControl('')
    });

    constructor(private authService: AuthService, private router: Router) {
        this.doesPasswordMatch = true;
        this.tried = false;
    }

    ngOnInit() {
    }

    onSignIn() {

        const {email, password, passwordSecurity} = this.signIn.value;

        if (password === passwordSecurity) {

            const user = new User();
            user.email = email;
            user.password = password;
            user.dni = new Dni(localStorage.getItem('dni'));

            this.authService.signIn(user)
                .pipe(last())
                .subscribe(
                    (response: Response) => {
                        this.router.navigateByUrl('auth/login');
                    },
                    error1 => {
                        this.tried = true;
                    }
                );

        } else {
            this.doesPasswordMatch = false;
        }
    }

}
