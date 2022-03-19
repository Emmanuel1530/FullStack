import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Imagen } from './../../../../modelos/imagen.model';
import { Ciudad } from './../../../../modelos/ciudad.model';
import { mostrarMensaje } from '../../../../utilidades/mensajes/mensajes-toast.func';

@Component({
  selector: 'app-ciudad-editar',
  templateUrl: './ciudad-editar.component.html',
  styleUrls: ['./ciudad-editar.component.css']
})
export class CiudadEditarComponent implements OnInit {

  public ciudadSeleccionada: Ciudad;
  public arregloCiudades: Ciudad[];

  public tmpBase64: any;

  constructor(public miMensaje: ToastrService, public miModal: BsModalService) {
    this.ciudadSeleccionada = this.inicializarCiudad();
    this.arregloCiudades = [];
    this.obtenerCiudad();
  }

  ngOnInit(): void {
  }

  // Métodos obligatorios
  // *************************************************************************************

  public inicializarCiudad(): Ciudad {
    return new Ciudad(0, '', '', this.inicializarImagen());
  }
  public inicializarImagen(): Imagen {
    return new Imagen(0, '', '', '', '', '', '');
  }

  // Ventana Modal
  //********************************************************************************** */
  public cerrarModal(): void {
    this.miModal.hide();
  }

  // Lógica del negocio
  //***********************************************************************************
  public obtenerCiudad(): void {
    let numero: any;
    numero = this.miModal.config.initialState?.list;
    this.arregloCiudades = [];
  }

  public editarCiudad(formulario: NgForm): void {
    mostrarMensaje('success', 'Ciudad editada con exito', 'Exito', this.miMensaje);
    this.cerrarModal();
  }

  //Seleccion de imagen
  //***********************************************************************************
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
      this.ciudadSeleccionada.fotociudad.tipoimagen = caja.type;
      this.ciudadSeleccionada.fotociudad.tamanoimagen = caja.size;
      this.ciudadSeleccionada.fotociudad.nombrepublicoimagen = caja.name;
      this.ciudadSeleccionada.fotociudad.base64 = this.tmpBase64.replace(/^data:image\/\w+;base64,/, '');
    };
  }

}
