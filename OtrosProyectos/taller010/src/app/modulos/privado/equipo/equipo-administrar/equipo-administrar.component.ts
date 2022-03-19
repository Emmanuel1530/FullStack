import { Ciudad } from './../../../../modelos/ciudad.model';
import { Equipo } from './../../../../modelos/equipo.model';
import { ARREGLO_EQUIPOS } from './../../../../mocks/equipo.mock';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-equipo-administrar',
  templateUrl: './equipo-administrar.component.html',
  styleUrls: ['./equipo-administrar.component.css'],
})
export class EquipoAdministrarComponent implements OnInit {
  public arregloEquipo: Equipo[];
  public equipoSeleccionado: Equipo;

  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo: string;
  public modalContenido: string;

  public tmpBase64: any;

  constructor(public miModal: BsModalService) {
    this.arregloEquipo = ARREGLO_EQUIPOS;
    this.equipoSeleccionado = this.inicializarEquipo();

    this.modalRef = this.tmpBase64;
    this.modalTitulo = '';
    this.modalCuerpo = '';
    this.modalContenido = '';
  }

  ngOnInit(): void {}
  //*********************************************** */

  public inicializarCiudad(): Ciudad {
    return new Ciudad(0, '', '', '', '');
  }

  public inicializarEquipo(): Equipo {
    return new Equipo(0, this.inicializarCiudad(), '', '', '', '', '');
  }

  //*********************************************************** */
  public abrirModal(plantilla: TemplateRef<any>, objEquipo: Equipo): void {
    this.equipoSeleccionado = objEquipo;
    this.modalRef = this.miModal.show(plantilla, { class: 'modal-md' });
    this.modalTitulo = 'Advertencia';
    this.modalCuerpo = '¿Realmente quiere eliminar el equipo?';
    this.modalContenido = objEquipo.nombreEquipo + ' De ' + objEquipo.ciudad.nombreCiudad;
  }



  public borrarEquipo(objEquipo: Equipo): void {
    let pos = 0;
    this.arregloEquipo.forEach(function (dato, indice, arreglo) {
      if (arreglo[indice] === objEquipo) {
        pos = indice;
      }
    });
    this.arregloEquipo.splice(pos, 1);
    this.inicializarEquipo();
  }

  public btnDelete():void{
    this.borrarEquipo(this.equipoSeleccionado);
    this.btnCancel();
  }

  public btnCancel(): void {
    this.modalRef.hide();
  }
}
