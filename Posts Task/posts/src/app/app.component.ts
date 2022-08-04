import { Component } from '@angular/core';

@Component({
  selector: 'pw-root',
  template:`
  <nav>
    <h4>{{pageTitle}}</h4>
     <ul class="nav nav-pills">
       <li><a class="nav-link" routerLink="./posts">Post List </a></li>
     </ul>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  pageTitle :string = `Welcome To Our App :)`
}
