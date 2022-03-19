import { ARREGLO_CIUDADES } from './../../../../mocks/ciudad.mock';
import { ARREGLO_EQUIPOS } from './../../../../mocks/equipo.mock';
import { Ciudad } from './../../../../modelos/ciudad.model';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/modelos/equipo.model';
import { mostrarMensaje } from 'src/app/utilidades/mensajes/mensajes-toast.func';

@Component({
  selector: 'app-equipo-crear',
  templateUrl: './equipo-crear.component.html',
  styleUrls: ['./equipo-crear.component.css'],
})
export class EquipoCrearComponent implements OnInit {
  public equipoSeleccionado: Equipo;
  public arregloEquipo: Equipo[];
  public arregloCiudad: Ciudad[];
  public tmpBase64: any;

  constructor(public miMensaje: ToastrService) {

    this.equipoSeleccionado = this.inicializarEquipo();
    this.arregloEquipo = ARREGLO_EQUIPOS;
    this.arregloCiudad=ARREGLO_CIUDADES;

    this.tmpBase64 = null;
  }

  ngOnInit(): void {

  }

  public datosValidos(): boolean {
    let bandera = true;
    if (
      this.equipoSeleccionado.ciudad.nombreCiudad == '' ||
      this.equipoSeleccionado.nombreEquipo == '' ||
      this.equipoSeleccionado.estadioEquipo == '' ||
      this.equipoSeleccionado.fechaFundacionEquipo == ''
    ) {
      bandera = false;
    }
    return bandera;
  }


  public inicializarCiudad(): Ciudad {
    return new Ciudad(0, '', '', '', '');
  }

  public inicializarEquipo(): Equipo {
    return new Equipo(0, this.inicializarCiudad(), '', '', '', '', '');
  }

  public crearEquipo(): void {
    if (this.datosValidos()) {
      this.equipoSeleccionado.codigoEquipo = this.arregloEquipo.length ;   //aqui le quite el +1 ya que en la tabla me saltaba de la posicion 10 a la 12
      this.arregloEquipo.push(this.equipoSeleccionado);
      this.inicializarEquipo();
    } else {
      mostrarMensaje(
        'Error',
        'No se pueden crear equipo </br> con campos vacios',
        'Advertencia',
        this.miMensaje
      );
    }
  }

  //*************   aca vienen el metodo cargar la foto, este es el tomasino */
  public seleccionarFoto(objeto: any): any {
    let caja = objeto.target.files[0];
    if (!caja || caja.length == 0) {
      return;
    }
    if (caja.type.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(caja);
    reader.onload = () => {
      this.tmpBase64 = reader.result;

      this.equipoSeleccionado.nombreFotoEquipo = caja.name;
      this.equipoSeleccionado.base64FotoEquipo = this.tmpBase64;
    };
  }
}
