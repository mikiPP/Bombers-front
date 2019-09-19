import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, last} from 'rxjs/operators';
import {Dni} from '../../Shared/Models/Dni.model';
import {Observable} from 'rxjs';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  checkDni(dni: Dni): Observable<any> {

    return this.http.post('bombers/api/auth/dni', {
      dni : dni.dni});

  }
}
