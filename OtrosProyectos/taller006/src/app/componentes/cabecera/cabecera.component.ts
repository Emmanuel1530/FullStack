import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  public titulo: string;
  constructor() {
    this.titulo="crud usta sistemas";

  }

  ngOnInit(): void {
  }

}
