import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Dni} from '../../Shared/Models/Dni.model';
import {Observable} from 'rxjs';
import {User} from '../../Shared/Models/User.model';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  checkDni(dni: Dni): Observable<any> {

    return this.http.get('api/dni?dni=' + dni.dni);

  }


  login(user: User): Observable<any> {

    return this.http.post('api/login', {
      email: user.email,
      password: user.password
    });
  }

  signIn(user: User): any {
    return this.http.post('api/auth/sign-up', {
      dni: {
        dni: user.dni.dni
      },
      email: user.email,
      password: user.password
    });
  }

  dniChecked(): boolean {
    return (localStorage.getItem('dniChecked') === 'true');
  }
}
