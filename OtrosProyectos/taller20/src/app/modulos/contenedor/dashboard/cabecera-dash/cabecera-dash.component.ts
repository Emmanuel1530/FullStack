import { AccesoService } from './../../../../servicios/acceso.service';
import { Imagen } from './../../../../modelos/imagen.model';
import { Component, OnInit } from '@angular/core';

import { Usuario } from './../../../../modelos/usuario.model';

@Component({
  selector: 'app-cabecera-dash',
  templateUrl: './cabecera-dash.component.html',
  styleUrls: ['./cabecera-dash.component.css']
})
export class CabeceraDashComponent implements OnInit {

  public usuarioSeleccionado: Usuario;
  public base64: string;

  constructor(public accesoService:AccesoService) {
    this.usuarioSeleccionado = this.inicializarUsuario();
    this.base64 = localStorage.getItem('foto') as string;
  }

  ngOnInit(): void { }

  // Métodos obligatorios
  // ****************************************************************************
  public inicializarImagen(): Imagen {
    return new Imagen(0, '', '', '', '', '', '');
  }

  public inicializarUsuario(): Usuario {
    return new Usuario(0, this.inicializarImagen(), '', '', '', '');
  }

  // Lógica del negocio
  // ****************************************************************************
  public cerrarSesion(): void {
    this.accesoService.salir();
  }

}
