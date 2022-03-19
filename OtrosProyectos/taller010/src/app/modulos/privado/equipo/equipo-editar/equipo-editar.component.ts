import { ARREGLO_CIUDADES } from './../../../../mocks/ciudad.mock';
import { ToastrService } from 'ngx-toastr';
import { mostrarMensaje } from 'src/app/utilidades/mensajes/mensajes-toast.func';
import { ARREGLO_EQUIPOS } from './../../../../mocks/equipo.mock';
import { Ciudad } from './../../../../modelos/ciudad.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Equipo } from 'src/app/modelos/equipo.model';

@Component({
  selector: 'app-equipo-editar',
  templateUrl: './equipo-editar.component.html',
  styleUrls: ['./equipo-editar.component.css'],
})
export class EquipoEditarComponent implements OnInit {

  public equipoSeleccionado: Equipo;
  public arregloEquipo: Equipo[];
  public arregloCiudad: Ciudad[];

  public tmpBase64: any;

  constructor(public rutaActiva: ActivatedRoute,public miMensaje: ToastrService) {

    this.equipoSeleccionado = this.inicializarEquipo();
    this.arregloEquipo = ARREGLO_EQUIPOS;
    this.arregloCiudad=ARREGLO_CIUDADES;
    this.cargarEquipo();

    this.tmpBase64 = null;
  }

  ngOnInit(): void {}

  public inicializarCiudad(): Ciudad {
    return new Ciudad(0, '', '', '', '');
  }

  public inicializarEquipo(): Equipo {
    return new Equipo(0, this.inicializarCiudad(), '', '', '', '', '');
  }

  public cargarEquipo(): void {
    this.rutaActiva.paramMap.subscribe((parametro: ParamMap) => {
      const miCodigo = String(parametro.get('codPropietario'));
      const miCodigoNumerico = parseFloat(miCodigo);

      this.arregloEquipo.filter((objEquipo: Equipo) => {
        if (objEquipo.codigoEquipo === miCodigoNumerico) {
          this.equipoSeleccionado = objEquipo;
        }
      });
    });
  }



//editar equipo ...






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
