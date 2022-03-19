import { Usuario } from './../modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as misUrls from '../utilidades/dominios/uris';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public appUser=misUrls.API_USUARIO;

  constructor(private http:HttpClient) { }

  public obtenerUsuarioServicio(codigoUsuario:any):Observable<Usuario>{
    return this.http.get<Usuario>(this.appUser + '/' + codigoUsuario);
  }
  public actualizarUsuarioServicio(objUsuario:Usuario):Observable<Usuario>{
     return this.http.put<Usuario>(this.appUser + '/editar/'+
      objUsuario.codigoUsuario,objUsuario);
  }
}
