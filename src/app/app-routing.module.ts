import { NgModule } from '@angular/core';
import {LoginComponent} from './Authentication/login/login.component';
import {SignInComponent} from './Authentication/signIn/signIn.component';
import {HomeComponent} from './Authentication/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'auth', children: [
    {path: 'login', component: LoginComponent},
    {path: 'signIn', component: SignInComponent},
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
