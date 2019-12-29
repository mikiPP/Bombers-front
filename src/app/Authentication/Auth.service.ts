import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Dni} from '../../Shared/Models/Dni.model';
import {Observable} from 'rxjs';
import {User} from '../../Shared/Models/User.model';
import {map} from 'rxjs/operators';


@Injectable()
export class AuthService {

  private  readonly uri = "api/" ;

  constructor(private http: HttpClient) {}

  checkDni(dni: Dni): Observable<any> {

    return this.http.get(this.uri + 'dni?dni=' + dni.dni);

  }


  login(user: User): Observable<any> {

    return this.http.post<any>(this.uri + 'login', {
      email: user.email,
      password: user.password
    }, {observe: 'response' as 'body'})
        .pipe(map(user => {
            return user;
        }));
  }

  signIn(user: User): any {
    return this.http.post(this.uri + '/auth/sign-up', {
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

    tokenChecked(): boolean {
        return (localStorage.getItem('token') !== null )
    }
}
