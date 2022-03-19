import { ARREGLO_PROPIETARIOS } from './../mocks/propietario.mock';
import { Carro } from '../modelos/carro';
import { ARREGLO_CARROS } from '../mocks/carro-mock';
import { Propietario } from '../modelos/propietario.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './carro-administrar.component.html',
  styleUrls: ['./carro-administrar.component.css'],
})
export class CarroAdministrarComponent implements OnInit {
  public carroSeleccionado: Carro;
  public arregloCarro: Carro[];
  public propietarioSelecionado: Propietario;
  public arregloPropietarios: Propietario[];
  public tmpBase64: any;
  public parametroMensaje: any;

  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo: string;
  public modalContenido: string;


  constructor(public miModal: BsModalService, public miMensaje: ToastrService) {
    this.propietarioSelecionado = new Propietario(0, '', '', '', '', '', '');
    this.carroSeleccionado = new Carro(0, '', '', 0, this.propietarioSelecionado, '', '');
    this.arregloCarro = ARREGLO_CARROS;
    this.arregloPropietarios = ARREGLO_PROPIETARIOS;
    this.tmpBase64 = null;
    this.parametroMensaje = {
      closeButton: true,
      enableHtml: true,
      progresesBar: true,
      timeOut: 6000,
      positionClass: 'toast-top-center',
    };
    this.modalRef = this.tmpBase64;
    this.modalTitulo = '';
    this.modalCuerpo = '';
    this.modalContenido = '';
  }

  ngOnInit(): void { }

  public seleccionarCarro(miCarro: Carro): void {
    this.carroSeleccionado = miCarro;
    this.propietarioSelecionado = miCarro.propietario;
  }
  public actualizarCarrito(): void {
    this.carroSeleccionado.propietario = this.propietarioSelecionado;
    this.resetearCarro();
  }
  public resetearCarro(): void {
    this.carroSeleccionado = new Carro(0, '', '', 0, this.propietarioSelecionado, '', '');
    this.propietarioSelecionado=new Propietario(0, '', '', '', '', '', '');
  }
  public borrarCarro(miCarro: Carro): void {
    this.arregloCarro = this.arregloCarro.filter(
      (objCarro) => objCarro !== miCarro
    );
  }
  public verificarDatos(): boolean {
    if (
      this.carroSeleccionado.marca == '' ||
      this.carroSeleccionado.placa == '' ||
      this.carroSeleccionado.modelo == 0
    ) {
      this.miMensaje.error(
        'No se permite registros vacios',
        'ERROR',
        this.parametroMensaje
      );
      return false;
    }

    return true;
  }
  public agregarCarro(): void {
    if (this.verificarDatos()) {
      this.carroSeleccionado.codigo = this.arregloCarro.length + 1;
      this.arregloCarro.push(this.carroSeleccionado);
    }
  }
  public seleccionaFoto(miCaja: any): any {
    if (!miCaja.target.files[0] || miCaja.target.files[0].length == 0) {
      return;
    }

    const tipo = miCaja.target.files[0].type;

    if (tipo.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(miCaja.target.files[0]);



    reader.onload = () => {
      this.tmpBase64 = reader.result;
      this.carroSeleccionado.fotoBase64 = this.tmpBase64;
      this.carroSeleccionado.nombreFoto = miCaja.target.files[0].name;
    };
  }

  public btnCancelar(): void {
    this.modalRef.hide();
  }
  public btnBorrarCarro(): void {
    this.borrarCarro(this.carroSeleccionado);
    this.btnCancelar();
  }
  public btnAbrirModal(plantilla: TemplateRef<any>, miCarro: Carro): void {
    this.carroSeleccionado = miCarro;
    this.modalRef = this.miModal.show(plantilla, { class: 'modal-md' });
    this.modalTitulo = "Advertencia";
    this.modalCuerpo = "En realidad desea borrar este carro mompi?";
    this.modalContenido = miCarro.marca + " " + miCarro.placa;
  }

}
