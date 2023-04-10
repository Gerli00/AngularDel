import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
 // templateUrl: './header.component.html',
  //template: `<p>header works! {{ someText }} </p>`,
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="logo"> <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" style="width:30px; height:25px;"/></a>
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link" [routerLink]="['/example']">Example</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" [routerLink]="['/exampleTwo']">Example Two</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" [routerLink]="['/simplepage']">Bmi Calculator</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  someText = "My app is really nice!";
}
