import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  routes = [{ 'routeName': 'header', 'path': '/header' },
  { 'routeName': 'checkbox', 'path': '/checkbox' },
  { 'routeName': 'loginForm', 'path': '/login' },
  { 'routeName': 'navbar', 'path': '/navbar' }]
}
