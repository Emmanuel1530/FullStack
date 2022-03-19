import { ARREGLO_PROPIETARIOS } from './../../mocks/propietario.mock';
import { ARREGLO_CARROS } from './../../mocks/carro.mock';
import { Propietario } from './../../modelos/propietario.model';
import { Carro } from './../../modelos/carro.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propietario-carros',
  templateUrl: './propietario-carros.component.html',
  styleUrls: ['./propietario-carros.component.css']
})
export class PropietarioCarrosComponent implements OnInit {

  public arregloCarros: Carro[];
  public arregloPropietarios: Propietario[];

  public propietarioSeleccionado: Propietario;

  constructor(public miRuta:Router) {
    this.arregloCarros = ARREGLO_CARROS;
    this.arregloPropietarios= ARREGLO_PROPIETARIOS;
    this.propietarioSeleccionado = this.inicializarPropietario();
   }

  ngOnInit(): void {
  }

  //Metodos OBLIGATORIOS

  public inicializarPropietario():Propietario {
    return new Propietario(0,'','','','','','');
  }

  public seleccionarPropietario(objPropietario:Propietario):void {
    this.propietarioSeleccionado = objPropietario;
    this.miRuta.navigate(['/dash/propAdminCarros/detalle',objPropietario.codigo]);
  }

  //Metodos de LOGICA DE NEGOCIO de la CLASE

  public cantidadCarros(objPropietario:Propietario):number{
    let cantidad = 0;
    this.arregloCarros.filter((objCarro)=>{
      if (objCarro.propietario.codigo == objPropietario.codigo) {
        cantidad++;
      }
    });
    return cantidad;
  }
}
