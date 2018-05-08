import { Component } from '@angular/core';
import { ProductSerivice } from './product-list/product.service';

@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']

  template : `
  <div>
<nav class='navbar navbar-default'>
<div class= 'container-fluid'>
<a class='navbar-brand'> {{pageTitle}} </a>
<ul class='nav navbar-nav'>
  <li><a [routerLink] ="['/welcome']"> Home </a></li>
  <li><a [routerLink] ="['/products']"> Product List </a></li>
</ul>
</div>
</nav>
<div class='container'>
<router-outlet></router-outlet>
</div>
  </div>
  `,
  providers:[ProductSerivice]
})
export class AppComponent {
 pageTitle :String = 'Acme Product Management.';
}
