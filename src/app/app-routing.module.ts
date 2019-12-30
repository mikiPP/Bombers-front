import {NgModule} from '@angular/core';
import {LoginComponent} from './Authentication/login/login.component';
import {SignInComponent} from './Authentication/signIn/signIn.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../Shared/Guards/auth.guard';
import {IndexComponent} from './Authentication/index/index.component';
import {TokenGuard} from '../Shared/Guards/token.guard';

const appRoutes: Routes = [
    {
        path: 'auth', children: [
            {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
            {path: 'signIn', component: SignInComponent, canActivate: [AuthGuard]},
            {path: '', component: IndexComponent},
        ]
    },
    {path: 'home', component: HomeComponent, canActivate: [TokenGuard]},
    {path: '', redirectTo: '/auth', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
