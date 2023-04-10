import { Component } from '@angular/core';

@Component({
  selector: 'app-exampleTwo',
  templateUrl: './exampleTwo.component.html',
  styleUrls: ['./exampleTwo.component.css'],
  template: `
    <label *ngIf="isMessageShown">{{text}}</label><br>
    <button class="btn btn-danger" (click)="toggleMessage()">Click here!</button>
  `
})
export class ExampleTwoComponent {
  text = "Example text here!";
  isMessageShown = false;

  toggleMessage = (): void => { this.isMessageShown = !this.isMessageShown; }

  // toggleMessage(): void {
  //   // if (this.isMessageShown == true) this.isMessageShown = false; else this.isMessageShown = true;
  //   // this.isMessageShown = this.isMessageShown == true ? false : true;
  //   this.isMessageShown = !this.isMessageShown;
  // }
}
