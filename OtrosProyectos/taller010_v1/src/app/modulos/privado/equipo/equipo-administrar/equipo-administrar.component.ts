import { ARREGLO_CIUDADES } from './../../../../mocks/ciudad.mock';
import { ARREGLO_EQUIPOS } from './../../../../mocks/equipo.mock';
import { Equipo } from './../../../../modelos/equipo.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Ciudad } from './../../../../modelos/ciudad.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-equipo-administrar',
  templateUrl: './equipo-administrar.component.html',
  styleUrls: ['./equipo-administrar.component.css'],
})
export class EquipoAdministrarComponent implements OnInit {
  public arregloEquipos: Equipo[];
  public arregloCiudades: Ciudad[];

  public equipoSeleccionado: Equipo;

  public modalRef: BsModalRef;
  public modalTitulo: String;
  public modalCuerpo: String;
  public modalContenido: String;

  public tmpBase64: any;

  constructor(public miModal: BsModalService) {
    this.arregloEquipos = ARREGLO_EQUIPOS;
    this.arregloCiudades = ARREGLO_CIUDADES;
    this.equipoSeleccionado = this.inicializarEquipo();

    this.modalRef = this.tmpBase64;
    this.modalTitulo = '';
    this.modalCuerpo = '';
    this.modalContenido = '';
  }

  ngOnInit(): void {}

  public inicializarEquipo(): Equipo {
    return new Equipo(0, this.inicializarCiudad(), '', '', '', '', '');
  }

  public inicializarCiudad(): Ciudad {
    return new Ciudad(0, '', '', '', '');
  }

  public seleccionarEquipo(objEquipo: Equipo): void {
    this.equipoSeleccionado = objEquipo;
  }

  public borrarEquipo(objEquipo: Equipo): void {
    let pos = 0;
    this.arregloEquipos.forEach(function (dato, indice, arreglo) {
      if (arreglo[indice] === objEquipo) {
        pos = indice;
      }
    });
    this.arregloEquipos.splice(pos, 1);
    this.inicializarEquipo();
  }

  //Modal Controls

  public abrirModal(plantilla: TemplateRef<any>, objEquipo: Equipo) {
    this.equipoSeleccionado = objEquipo;
    this.modalRef = this.miModal.show(plantilla, { class: 'modal-md' });
    this.modalTitulo = 'Advertencia';
    this.modalCuerpo = 'Realmente quieres eliminar al equipo?';
    this.modalContenido = objEquipo.nombreEquipo;
  }
  public btnCancelar(): void {
    this.modalRef.hide();
  }

  public btnEliminar(): void {
    this.borrarEquipo(this.equipoSeleccionado);
    this.btnCancelar();
  }
}
