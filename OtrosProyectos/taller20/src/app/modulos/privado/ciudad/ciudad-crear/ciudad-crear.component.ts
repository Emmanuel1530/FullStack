import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Ciudad } from './../../../../modelos/ciudad.model';
import { Imagen } from './../../../../modelos/imagen.model';
import { mostrarMensaje } from '../../../../utilidades/mensajes/mensajes-toast.func';

@Component({
  selector: 'app-ciudad-crear',
  templateUrl: './ciudad-crear.component.html',
  styleUrls: ['./ciudad-crear.component.css']
})
export class CiudadCrearComponent implements OnInit {

  public tmpBase64: any;
  public ciudadSeleccionada: Ciudad;

  constructor(public miMensaje: ToastrService, public miModal: BsModalService) {
    this.ciudadSeleccionada = this.inicializarCiudad();
  }

  ngOnInit(): void {
  }

  // Métodos obligatorios
  // *********************************************************************************
  public inicializarCiudad(): Ciudad {
    return new Ciudad(0, '', '', this.inicializarImagen());
  }
  public inicializarImagen(): Imagen {
    return new Imagen(0, '', '', '', '', '', '');
  }


  // Lógica del negocio
  // *********************************************************************************
  public agregarCiudad(formulario: NgForm): void {
  }


  // Manejo ventana flotante
  // *********************************************************************************
  public cerrarModal(): void {
    this.miModal.hide();
  }


  //Seleccion de imagen
  //******************************************************************************** */
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
      this.ciudadSeleccionada.fotociudad.base64 = this.tmpBase64;
      this.ciudadSeleccionada.fotociudad.tamanoimagen = caja.size;
      this.ciudadSeleccionada.fotociudad.nombrepublicoimagen = caja.name;
    };
  }

}
