import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `
  
    <div  class="navbar-collapse collapse navbar-inverse">
      
      <a class="navbar-brand">AngularJS Exercise</a>

      <ul class="nav navbar-nav">
        <li ><a routerLink="/home" routerLinkActive="menu">Home</a></li>
        <li><a routerLink="/categories" routerLinkActive="menu">Categories</a></li>
      </ul>

    </div>

    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent{}
