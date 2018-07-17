import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { EventBarComponent } from './event-bar/event-bar.component'
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CheckBoxComponent,
    LoginFormComponent,
    HeaderComponent,
    EventBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
