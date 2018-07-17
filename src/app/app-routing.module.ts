import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CheckBoxComponent } from './check-box/check-box.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'checkbox', component: CheckBoxComponent },
  { path: 'loginForm', component: LoginFormComponent },
  { path: 'navbar', component: NavbarComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
