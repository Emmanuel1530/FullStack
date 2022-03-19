import { Component, OnInit, TemplateRef } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ARREGLO_PROPIETARIOS } from './../../mocks/propietario.mock';
import { Propietario } from './../../modelos/propietario.model';
import { ARREGLO_CARROS } from './../../mocks/carro.mock';
import { Carro } from 'src/app/modelos/carro.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { mostrarMensaje } from 'src/app/utilidades/mensajes.func';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  public carrosSeleccionado: Carro;
  public arregloCarros: Carro[];
  public arregloPropietario: Propietario[];

  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo: string;
  public modalContenido: string;

  public tmpBase64: any;

  constructor(public miModal: BsModalService, public miMensaje: ToastrService) {

    this.carrosSeleccionado = this.inicializarCarro();
    this.arregloCarros = ARREGLO_CARROS;
    this.arregloPropietario = ARREGLO_PROPIETARIOS;
    this.tmpBase64 = null;

    this.modalRef = this.tmpBase64;
    this.modalTitulo = "";
    this.modalCuerpo = "";
    this.modalContenido = "";
  }

  ngOnInit(): void {
    this.inicializarCombo();
  }

  //*******************************************************************

  public inicializarPropietario(): Propietario {
    return new Propietario(0, '', '', '', '', '', '');
  }

  public inicializarCarro(): Carro {
    return new Carro(0, '', '', 0, this.inicializarPropietario(), '', '');
  }
  public inicializarCombo(): void {
    this.carrosSeleccionado.propietario = ARREGLO_PROPIETARIOS[0];
  }
  public seleccionarCarro(objCarro: Carro): void {
    this.carrosSeleccionado = objCarro;
  }
  public resetearCarro(): void {
    this.carrosSeleccionado = this.inicializarCarro();
    this.inicializarCombo();
  }

  public datosValidos(): boolean {
    let bandera = true;
    if (this.carrosSeleccionado.placa == "" ||
      this.carrosSeleccionado.marca == "" ||
      this.carrosSeleccionado.modelo == 0 ||
      this.carrosSeleccionado.propietario.codigo == 0) {
      bandera = false;
    }
    return bandera;
  }

  //*************Aca viene logoca del negocio  */
  public agregarCarros(): void {
    if (this.datosValidos()) {
      this.carrosSeleccionado.codigo = this.arregloCarros.length + 1;
      this.arregloCarros.push(this.carrosSeleccionado);
      this.resetearCarro();
    } else {
      mostrarMensaje("Error", "No se pueden crear carros </br> con campos vacios",
        "Advertencia", this.miMensaje
      );
    }
  }

  public borrarCarro(objCarro: Carro): void {
    let pos = 0;
    this.arregloCarros.forEach(function (dato, indice, arreglo) {
      if (arreglo[indice] === objCarro) {
        pos = indice;
      }
    });
    this.arregloCarros.splice(pos, 1);
    this.resetearCarro();
  }
  public actualizarCarro(): void {
    if (this.datosValidos()) {
      this.resetearCarro();
    } else {
      mostrarMensaje(
        'Warning', 'No se puede actualizar carros <br/>con campos vacios',
        'advertencia', this.miMensaje
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

      this.carrosSeleccionado.nombreFoto = caja.name;
      this.carrosSeleccionado.fotobase64 = this.tmpBase64;

    };
  }
  //*********************** Metodo para las ventanas modales*********************** */
  public abrirModal(plantilla: TemplateRef<any>, objCar: Carro):void{
    this.carrosSeleccionado = objCar;
    this.modalRef = this.miModal.show(plantilla, {class: 'modal-md'});
    this.modalTitulo = 'Advertencia';
    this.modalCuerpo = '¿Realmente quiere eliminar el carro?';
    this.modalContenido = objCar.marca + ' ' + objCar.placa;
  }

  public btnCancel():void{
    this.modalRef.hide();
  }

  public btnDelete():void{
    this.borrarCarro(this.carrosSeleccionado);
    this.btnCancel();
  }

}
