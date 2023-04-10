import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <app-header></app-header>
    <div class="container">
      <!-- <app-simple-page></app-simple-page> -->
      <!-- <app-ngif-example-page></app-ngif-example-page> -->
      <!-- <app-ng-for-example-page></app-ng-for-example-page> -->
      <!-- <img height="60" src="https://static.vecteezy.com/system/resources/previews/007/749/084/original/skull-crossbones-danger-icon-danger-symbol-skull-free-vector.jpg" > -->
      <!-- <app-bmi-calculator></app-bmi-calculator> -->
      <!-- <p class="main-paragraph">Some text</p> -->
     <!-- <button (click)="onClick()">Start</button> -->
      <router-outlet></router-outlet>
    </div>
    <!-- <app-footer></app-footer> -->
  `,
})


export class AppComponent {
  title = 'AngularDel';
  onClick() {

   console.log("Button clicked!");
   // alert("Button clicked!");
  }
  text = `Placeholder text`;

  MessageShown = true;

  toggleMessage(): void {
    this.MessageShown = this.MessageShown == true ? false : true;
  }
}
