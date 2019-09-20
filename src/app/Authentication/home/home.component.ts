import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Dni} from '../../../Shared/Models/Dni.model';
import {AuthService} from '../Auth.service';
import {Router} from '@angular/router';
import {last} from 'rxjs/operators';
import {parseHttpResponse} from 'selenium-webdriver/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../Shared/Style/style.css']
})
export class HomeComponent implements OnInit {
  private tried = false;

  checkDni = new FormGroup({
    dni: new FormControl('')
  });
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

onCheckDni() {

  this.authService.checkDni(new Dni(this.checkDni.value.dni))
    .pipe(last())
    .subscribe(
      (response: Promise<boolean> ) => {
        (response) ? this.router.navigateByUrl('auth/login') : this.tried = true;
        localStorage.setItem('dniChecked', (response) ? 'true' : 'false');
      },
      error1 => false
      );

  }

}
