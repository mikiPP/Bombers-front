import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Dni } from "../../../Shared/Models/Dni.model";
import { AuthService } from "../Auth.service";
import { Router } from "@angular/router";
import { last } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css", "../../../Shared/Style/style.css"]
})
export class HomeComponent implements OnInit {
  /**
   * PROPERTIES
   */
  private tried = false;
  checkDni = new FormGroup({
    dni: new FormControl("")
  });

  /**
   * CONSTRUCTOR
   * @param authService
   * @param router
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * BEHAVIOURS
   */
  ngOnInit() {}

  // THIS METHOD CHECKS IF THE DNI IS IN THE DATABASE. THEN, REDIRECTS THE USER TO THE LOG-IN PAGE.
  onCheckDni() {
    this.authService
      .checkDni(new Dni(this.checkDni.value.dni))
      .pipe(last())
      .subscribe(
        (response: Promise<boolean>) => {
          response
            ? this.router.navigateByUrl("auth/login")
            : (this.tried = true);
        },
        error => false
      );
  }
}
