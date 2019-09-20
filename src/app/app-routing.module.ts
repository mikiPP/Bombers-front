import { NgModule } from '@angular/core';
import {LoginComponent} from './Authentication/login/login.component';
import {SignInComponent} from './Authentication/signIn/signIn.component';
import {HomeComponent} from './Authentication/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../Shared/Guards/auth.guard';

const appRoutes: Routes = [
  {path: 'auth', children: [
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    {path: 'signIn', component: SignInComponent, canActivate: [AuthGuard]},
    {path: '', component: HomeComponent},
     ]},
  {path: '', redirectTo: '/auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
