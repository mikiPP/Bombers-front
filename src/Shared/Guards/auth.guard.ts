import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from '../../app/Authentication/Auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {


    canActivate(): boolean {
        return AuthService.dniChecked();
    }
}
