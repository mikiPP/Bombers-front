import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Dni} from '../../../Shared/Models/Dni.model';
import {AuthService} from '../Auth.service';
import {Router} from '@angular/router';
import {last} from 'rxjs/operators';


@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css', '../../../Shared/Style/style.css']
})
export class IndexComponent implements OnInit {
  private tried = false;

  checkDni = new FormGroup({
    dni: new FormControl('')
  });
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

    toLogin(): void {
        localStorage.setItem('dniChecked', 'true');
        this.router.navigateByUrl('auth/login');
    }

    onCheckDni(): void {

  this.authService.checkDni(new Dni(this.checkDni.value.dni))
    .pipe(last())
    .subscribe(
        (response: Response) => {

            if (response) {
                this.router.navigateByUrl('auth/signIn');
            }
            localStorage.setItem('dniChecked', 'true');
            localStorage.setItem('dni', this.checkDni.value.dni);
        },
        () => {
            this.tried = true;
            localStorage.setItem('dniChecked', 'false');
        }
      );

  }

}
