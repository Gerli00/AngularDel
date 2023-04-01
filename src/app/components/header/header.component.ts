import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
 // templateUrl: './header.component.html',
  template: `<p>header works! {{ someText }} </p>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  someText = "My app is really nice!";
}
