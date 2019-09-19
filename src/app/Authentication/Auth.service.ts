import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Dni } from "../../Shared/Models/Dni.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
  /**
   * CONSTRUCTOR
   */
  constructor(private http: HttpClient) {}

  /**
   * BEHAVIOURS
   */
  checkDni(dni: Dni): Observable<any> {
    return this.http.post("bombers/api/auth/dni", {
      dni: dni.dni
    });
  }
}
