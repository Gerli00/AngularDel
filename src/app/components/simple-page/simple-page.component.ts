import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-page',
  templateUrl: './simple-page.component.html',
  styleUrls: ['./simple-page.component.css']
})
export class SimplePageComponent {
  weight: number = 0;
  height: number = 0;
  bmi: number = 0;

  calculateBMI() {
    const heightOf = this.height / 100;
    this.bmi = this.weight / (heightOf * heightOf);
    console.log("Button clicked!");
  }

  getBMICategory() {
    if (this.bmi < 18.5) {
      return 'Underweight';
    } else if (this.bmi < 25) {
      return 'Normal weight';
    } else if (this.bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
}

