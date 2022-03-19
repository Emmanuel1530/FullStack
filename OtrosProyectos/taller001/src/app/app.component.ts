import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public miTitulo: string;
  constructor() {
    this.miTitulo = "Estoy usando una propiedad";
  }
}
