import { Component, OnInit, TemplateRef } from '@angular/core';

import { Imagen } from './../../../../modelos/imagen.model';
import { Equipo } from './../../../../modelos/equipo.model';
import { Ciudad } from './../../../../modelos/ciudad.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CiudadCrearComponent } from './../ciudad-crear/ciudad-crear.component';
import { CiudadEditarComponent } from './../ciudad-editar/ciudad-editar.component';

@Component({
  selector: 'app-ciudad-administrar',
  templateUrl: './ciudad-administrar.component.html',
  styleUrls: ['./ciudad-administrar.component.css']
})
export class CiudadAdministrarComponent implements OnInit {

  public ciudadSeleccionada: Ciudad;
  public arregloCiudades: Ciudad[];
  public arregloEquipos: Equipo[];
  public tmpBase64: any;

  public paginaActual: number;
  public cantidadMostrar: number;
  public cantidadPaginas: number;
  public cantidadTotalRegistros: number;

  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo: string;
  public modalContenido: string;

  constructor(public miModal: BsModalService) {
    this.ciudadSeleccionada = this.inicializarCiudad();
    this.arregloCiudades = [];
    this.arregloEquipos = [];

    this.paginaActual = 0;
    this.cantidadMostrar = 0;
    this.cantidadPaginas = 0;
    this.cantidadTotalRegistros = 0;

    this.tmpBase64 = null;
    this.modalRef = this.tmpBase64;
    this.modalTitulo = "";
    this.modalCuerpo = "";
    this.modalContenido = "";
  }

  ngOnInit(): void {
    this.actualizarPaginador();
  }

  // Métodos obligatorios
  // **************************************************************
  public inicializarCiudad(): Ciudad {
    return new Ciudad(0, '', '', this.inicializarImagen());
  }

  public inicializarImagen(): Imagen {
    return new Imagen(0, '', '', '', '', '', '');
  }

  public seleccionarCiudad(objCiudad: Ciudad): void {
    this.ciudadSeleccionada = objCiudad;
  }

  public resetearCiudad(): void {
    this.ciudadSeleccionada = this.inicializarCiudad();
  }

  // Lógica del negocio
  // **************************************************************
  public actualizarPaginador(): void {
    this.paginaActual = 1;
    this.cantidadMostrar = 6;
    this.cantidadTotalRegistros = this.arregloCiudades.length;
    this.cantidadPaginas = Math.ceil(
      this.cantidadTotalRegistros / this.cantidadMostrar
    );
  }

  public tieneEquipo(objCiudad: Ciudad): boolean {
    return true;
  }

  public obtenerCiudades(): void {

  }

  public borrarCiudad(objCiudad: Ciudad): void {

  }

  // Ventanas modales
  // **************************************************************
  public abrirModalSugerencia(plantilla: TemplateRef<any>, objCiudad: Ciudad): void {
    this.ciudadSeleccionada = objCiudad;
    this.modalRef = this.miModal.show(plantilla, { class: 'modal-md' });
    this.modalTitulo = "Sugerencia";
    this.modalCuerpo = "No se puede eliminar la ciudad ";
    this.modalContenido = this.ciudadSeleccionada.nombreciudad;
  }

  public abrirModalEliminar(plantilla: TemplateRef<any>, objCiudad: Ciudad): void {
    this.ciudadSeleccionada = objCiudad;
    this.modalRef = this.miModal.show(plantilla, { class: 'modal-md' });
    this.modalTitulo = "Advertencia";
    this.modalCuerpo = "¿Estas seguro de eliminar la ciudad? "
    this.modalContenido = this.ciudadSeleccionada.nombreciudad;
  }

  public abrirModalCrear(): void {
    this.modalRef = this.miModal.show(CiudadCrearComponent, { class: "modal-lg" });
    this.modalRef.onHidden?.subscribe(respuesta => {
      console.log(this.arregloCiudades);
      this.actualizarPaginador();
    });
  }

  public abrirModalEditar(codCiudad: number): void {
    const initialState = {
      list: { "tag": 'codCiudad', "value": codCiudad }
    };
    this.modalRef = this.miModal.show(CiudadEditarComponent, Object.assign({ class: "modal-lg", initialState }));
    this.modalRef.onHidden?.subscribe(res => {

    });
  }

  public cerrarModal(): void {
    this.miModal.hide();
  }

  public btnEliminar(): void {
    this.borrarCiudad(this.ciudadSeleccionada);
    this.cerrarModal();
  }

}
