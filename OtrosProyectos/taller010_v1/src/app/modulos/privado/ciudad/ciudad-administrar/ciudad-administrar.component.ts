import { ARREGLO_CIUDADES } from './../../../../mocks/ciudad.mock';
import { Ciudad } from './../../../../modelos/ciudad.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudad-administrar',
  templateUrl: './ciudad-administrar.component.html',
  styleUrls: ['./ciudad-administrar.component.css']
})
export class CiudadAdministrarComponent implements OnInit {

  public arregloCiudades:Ciudad[];
  constructor() {
    this.arregloCiudades = ARREGLO_CIUDADES;
  }

  ngOnInit(): void {
  }

}
