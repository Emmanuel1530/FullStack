import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ARREGLO_USUARIOS } from './../../../mocks/usuario.mock';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { mostrarMensaje } from 'src/app/utilidades/mensajes/mensajes-toast.func';
import { NgForm } from '@angular/forms';
import * as cifrado from 'js-sha512';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {


  public arregloUsuarios: Usuario[];
  public usuarioSeleccionado: Usuario;
  public patronCorreo = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';



  constructor(public miRuta: Router, public miMsj: ToastrService) {

    this.arregloUsuarios = ARREGLO_USUARIOS;
    this.usuarioSeleccionado = this.inicializarUsuario();


  }

  ngOnInit(): void { }

  public inicializarUsuario(): Usuario {
    return new Usuario(0, '', '', '', '', '', '');
  }

  public iniciarSesion(): void {
    localStorage.setItem('FullStackCodigo',
      this.usuarioSeleccionado.codigoUsuario.toString());
    mostrarMensaje('success', 'Hola perro', 'Hey!', this.miMsj);
    this.miRuta.navigate(['/dash/board/root']);
  }

  public errorSesion(miFormulario: NgForm): void {
    miFormulario.resetForm();
    this.usuarioSeleccionado = this.inicializarUsuario();
    mostrarMensaje('error', 'Contraseña o usuario incorrecto', 'ERROR', this.miMsj);
  }

  public verificar(formulario: NgForm): void {

    let encontrado = false;
    const miHash = cifrado.sha512(this.usuarioSeleccionado.claveUsuario);
    this.arregloUsuarios.forEach((miUsuario) => {
      if (miUsuario.correoUsuario == this.usuarioSeleccionado.correoUsuario
        &&
        miUsuario.claveUsuario == miHash
      ) {
        this.usuarioSeleccionado = miUsuario;
        encontrado = true;
      }
    });

    if (encontrado) {
      this.iniciarSesion();
    } else {
      this.errorSesion(formulario);
    }

  }
}


