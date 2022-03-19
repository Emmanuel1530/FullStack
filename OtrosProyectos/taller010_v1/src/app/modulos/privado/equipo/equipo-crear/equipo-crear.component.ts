import { ARREGLO_CIUDADES } from './../../../../mocks/ciudad.mock';
import { ARREGLO_EQUIPOS } from './../../../../mocks/equipo.mock';
import { Equipo } from './../../../../modelos/equipo.model';
import { Component, OnInit } from '@angular/core';
import { Ciudad } from './../../../../modelos/ciudad.model';
import { mostrarMensaje } from 'src/app/utilidades/mensajes/mensajes-toast.func';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-equipo-crear',
  templateUrl: './equipo-crear.component.html',
  styleUrls: ['./equipo-crear.component.css']
})
export class EquipoCrearComponent implements OnInit {

  public arregloEquipos: Equipo[];
  public arregloCiudades: Ciudad[];

  public equipoSeleccionado: Equipo;

  public tmpBase64: any;

  constructor(public miRuta:Router, public miMensaje: ToastrService) {
    this.arregloEquipos = ARREGLO_EQUIPOS;
    this.arregloCiudades = ARREGLO_CIUDADES;
    this.equipoSeleccionado = this.inicializarEquipo();
  }

  ngOnInit(): void {}

  public inicializarEquipo(): Equipo {
    return new Equipo(0,this.inicializarCiudad(),'','','','','');
  }

  public inicializarCiudad():Ciudad {
    return new Ciudad(0,'','','','');
  }

  public seleccionarEquipo(objEquipo: Equipo): void {
    this.equipoSeleccionado = objEquipo;
  }

  public datosValidos(): boolean {
    let bandera = true;
    if (this.equipoSeleccionado.nombreEquipo == ""
      || this.equipoSeleccionado.ciudad == null
      || this.equipoSeleccionado.estadioEquipo == ""
      || this.equipoSeleccionado.fechaFundacionEquipo == "") {
      bandera = false;
    }
    return bandera;
  }

  public agregarEquipo() {
    if (this.datosValidos()) {
      this.equipoSeleccionado.codigoEquipo = this.arregloEquipos.length + 1;
      this.arregloEquipos.push(this.equipoSeleccionado);
      this.inicializarEquipo();
      this.miRuta.navigate(['/dash/team/manageTeam']);
    } else {
      mostrarMensaje('error', 'No se pueden crear carros con campos vacios', 'Advertencia', this.miMensaje)
    }
  }

  //Metodo para cargar la foto
  public seleccionarFoto(objeto:any):void{
    let caja = objeto.target.files[0];
    if (!caja || caja.length == 0) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(caja);
    reader.onload=()=>{
      this.tmpBase64=reader.result;
      this.equipoSeleccionado.nombreFotoEquipo = caja.name;
      this.equipoSeleccionado.base64FotoEquipo = this.tmpBase64;
    }
  }
}
