import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  template: `

    <br>
    <table class="table table-hover" *ngIf="products.length > 0">
      <thead>
        <tr class="table-primary">
          <th scope="col">Title</th>
          <th scope="col">Count</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of products">
          <td>{{ product.title }}</td>
          <td>{{ product.count }}</td>
        </tr>
      </tbody>
    </table>
    <div class="alert alert-warning" role="alert" *ngIf="products.length <= 0">
      We don't have any products
    </div>
  `,
})

export class ExampleComponent {
  messages: Array<string> = [
    "Message1", "Message2", "Message3", "Message4" ];

  products: Array<any> = [
    { title: `iPhone`, count: 1500 },
    { title: `Samsung`, count: 1000 }
  ];
}
