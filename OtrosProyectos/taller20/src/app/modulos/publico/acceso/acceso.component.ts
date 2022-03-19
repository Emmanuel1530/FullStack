import { AccesoService } from './../../../servicios/acceso.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import * as cifrado from 'js-sha512';
import { ToastrService } from 'ngx-toastr';
import { Imagen } from './../../../modelos/imagen.model';
import { Usuario } from './../../../modelos/usuario.model';
import { mostrarMensaje } from './../../../utilidades/mensajes/mensajes-toast.func';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css'],
})
export class AccesoComponent implements OnInit, OnDestroy {
  public usuarioSeleccionado: Usuario;
  public patronCorreo = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  public tmp: any;
  public subscription: Subscription;

  constructor(
    public router: Router,
    public miMensaje: ToastrService,
    private accesoService: AccesoService
  ) {
    this.usuarioSeleccionado = this.inicializarUsuario();
    this.subscription = this.tmp;
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
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

  public verficarDatos(formulario: NgForm): void {
    const correo = this.usuarioSeleccionado.correoUsuario;
    const miHash = cifrado.sha512(this.usuarioSeleccionado.claveUsuario);
    const usuario = new Usuario(0, this.inicializarImagen(), '', '', correo,miHash);

    this.subscription=this.accesoService.iniciarSesion(usuario).subscribe(

    (res)=>{
      mostrarMensaje('success','Bienvenido','Bien hecho',this.miMensaje);
      localStorage.setItem('token',res.token as any);
      localStorage.setItem('foto',res.foto as any);
       this.router.navigate(['/dash/board/root']);

    },
    (err)=>{
      mostrarMensaje('error','Estas perdido?','Error Fatal',this.miMensaje);
      formulario.reset();
    }



    );
  }
}
