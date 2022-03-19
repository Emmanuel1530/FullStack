import { ARREGLO_PROPIETARIOS } from './../../mocks/propietario.mock';
import { ARREGLO_CARROS } from './../../mocks/carro.mock';
import { Propietario } from './../../modelos/propietario.model';
import { Carro } from './../../modelos/carro.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-propietario-detalle',
  templateUrl: './propietario-detalle.component.html',
  styleUrls: ['./propietario-detalle.component.css']
})
export class PropietarioDetalleComponent implements OnInit {

  public carroSeleccionado: Carro;
  public propietarioSeleccionado: Propietario;

  public arregloCarros: Carro[];
  public arregloPropietario: Propietario[];
  public arregloCarroPropietario: Carro[];

  constructor(public route: ActivatedRoute) {
    this.arregloCarros = ARREGLO_CARROS;
    this.arregloPropietario = ARREGLO_PROPIETARIOS;
    this.arregloCarroPropietario = [];

    this.carroSeleccionado = this.inicializarCarro();
    this.propietarioSeleccionado = this.inicializarPropietario();

    this.cargarPropietario();

  }

  ngOnInit(): void {
  }


  // metodos obligarorios
  // *********************************************************
  public inicializarPropietario(): Propietario {
    return new Propietario(0, '', '', '', '', '', '');
  }

  public inicializarCarro(): Carro {
    return new Carro(0, '', '', 0, this.inicializarPropietario(), '', '');
  }
  public seleccionarCarro(objetoCarro: Carro): void {
    this.carroSeleccionado = objetoCarro;
  }

  // logica del negocio
  //********************************************************
  public verCarros(): void {
    this.carroSeleccionado = this.inicializarCarro();
    this.arregloCarroPropietario = [];
    this.arregloCarros.find(objCarro => {
      if (objCarro.propietario == this.propietarioSeleccionado) {
        this.arregloCarroPropietario.push(objCarro);
      }
    });
  }

  public cargarPropietario(): void {
    this.route.paramMap.subscribe((parametro: ParamMap) => {
      const miCodigo = String(parametro.get('codPropietario'));
      const miCodigoNumerico = parseFloat(miCodigo);

      this.arregloPropietario.filter((objPropietario: Propietario) => {

        if (objPropietario.codigo === miCodigoNumerico) {
          this.propietarioSeleccionado = objPropietario;
        }


      });
      this.verCarros();
    });



  }
}
