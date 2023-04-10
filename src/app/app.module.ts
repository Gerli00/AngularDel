import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SimplePageComponent } from './components/simple-page/simple-page.component';
import { ExampleComponent } from './components/app/example/example.component';
import { ExampleTwoComponent } from './components/app/exampleTwo/exampleTwo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SimplePageComponent,
    ExampleComponent,
    ExampleTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "simplepage", component: SimplePageComponent},
      {path: "header", component: HeaderComponent}, //different pages
      {path: "footer", component: FooterComponent}, //different pages
      {path: "example", component: ExampleComponent},
      {path: "exampleTwo", component: ExampleTwoComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
