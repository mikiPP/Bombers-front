import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './Authentication/login/login.component';
import {SignInComponent} from './Authentication/signIn/signIn.component';
import {IndexComponent} from './Authentication/index/index.component';
import {RouterModule} from '@angular/router';
import {AuthService} from './Authentication/Auth.service';
import {AuthGuard} from '../Shared/Guards/auth.guard';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
      IndexComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
