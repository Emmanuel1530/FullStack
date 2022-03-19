import { AccesoService } from './servicios/acceso.service';
import { Injectable } from '@angular/core';
import {CanActivate,Router,} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VigilanteGuard implements CanActivate {
  constructor(private accesoService: AccesoService, private router: Router) {}

  canActivate(): boolean {
    if (this.accesoService.verificarUsuario()) {
      return true;
    }else{
      this.router.navigate(['/welcome/login']);
      return false;
    }
  }
}
