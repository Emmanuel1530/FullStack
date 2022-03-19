import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import * as urls from '../utilidades/dominios/uris';
import { Imagen } from '../modelos/imagen.model';
import { Usuario } from '../modelos/usuario.model';


@Injectable({
  providedIn: 'root',
})
export class AccesoService {
  public objUsuario: Usuario;
  public appLogin = urls.API_ACCESO;

  constructor(private http: HttpClient, private router: Router) {
    this.objUsuario = this.inicializarUsuario();
  }

  // Metodos Obligatorios
  // *****************************************************

  public inicializarImagen(): Imagen {
    return new Imagen(0, '', '', '', '', '', '');
  }

  public inicializarUsuario(): Usuario {
    return new Usuario(0, this.inicializarImagen(), '', '', '', '');
  }

  // Logica del negocio
  // *****************************************************

  public salir(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('foto');
    this.router.navigate(['/welcome/home']);
  }

  public obtenerToken(): any {
    return localStorage.getItem('token');
  }

  public obtenerUsuario(): Usuario {
    return this.objUsuario;
  }

  public verificarUsuario(): boolean {
    if (localStorage.getItem('token')) {
      const miToken: any = localStorage.getItem('token');
      try {
        const obj: any = jwtDecode(miToken);
        this.objUsuario.codigoUsuario = obj.id;
        this.objUsuario.correoUsuario = obj.correo;
        return true;
      } catch (error) {
        return false;
      }
    }
    return false;
  }

  public iniciarSesion(objUsuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.appLogin + '/login', objUsuario);

  }


}
