import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from '../../app/Authentication/Auth.service';

@Injectable({
    providedIn: 'root'
})
export class TokenGuard implements CanActivate {

    canActivate(): boolean {
        return AuthService.tokenChecked();
    }
}
