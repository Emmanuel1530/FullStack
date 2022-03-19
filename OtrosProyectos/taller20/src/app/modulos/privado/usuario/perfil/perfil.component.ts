import { Subscription } from 'rxjs';
import { Usuario } from './../../../../modelos/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/modelos/imagen.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  public objUsuario: Usuario;
  public objImagen: Imagen;
  public miSuscripcion: Subscription;
  public arregloTipos: any[];
  public temp: any;
  public cargaFinalizada: boolean;

  public patronCorreo = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor() {
    this.objUsuario = this.inicializarUsuario();
    this.objImagen = this.inicializarImagen();
    this.miSuscripcion = this.temp;
    this.arregloTipos = [
      { acronimo: null, tipo: 'seleccione el tipo de documento' },
      { acronimo: 'CC', tipo: '	Cédula' },
      { acronimo: 'TI', tipo: '	Tarjeta de Identidad' },
      { acronimo: 'TE', tipo: '	Tarjeta de extranjería' },
      { acronimo: 'PN', tipo: '	Pasaporte Nacional' },
      { acronimo: 'TR', tipo: '	Tarjeta de residencia' },
      { acronimo: 'RC', tipo: '	Registro civil' },
    ];
    this.cargaFinalizada = false;
  }

  ngOnInit(): void {}

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
  public obtenerUsuario():void{

  }
}
