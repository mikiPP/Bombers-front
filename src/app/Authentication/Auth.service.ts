import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, last} from 'rxjs/operators';
import {Dni} from '../../Shared/Models/Dni.model';
import {Observable} from 'rxjs';
import {User} from '../../Shared/Models/User.model';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  checkDni(dni: Dni): Observable<any> {

    return this.http.post('bombers/api/auth/dni', {
      dni : dni.dni});
  }

  signIn(user: User): any {
    return this.http.post('bombers/api/auth/sign-up', {
      dni: {
        dni: user.dni.dni
      },
      email: user.email,
      password: user.password,
      name: user.name,
      turn: user.turn,
    });
  }

  dniChecked(): boolean {
    return (localStorage.getItem('dniChecked') === 'true');
  }
}
