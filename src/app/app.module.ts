import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './Authentication/login/login.component';
import { SignInComponent } from './Authentication/signIn/signIn.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
