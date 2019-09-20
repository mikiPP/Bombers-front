import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Route, Router} from '@angular/router';
import {AuthService} from '../../app/Authentication/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}


  canActivate(): boolean {
    return (this.authService.dniChecked());
  }
}
