import { ErrorSeguridadComponent } from './../../modulos/privado/control/error-seguridad/error-seguridad.component';
import { Routes } from '@angular/router';

export const RUTAS_DASHBOARD: Routes = [

  { path: 'board', loadChildren: () => import('../../modulos/privado/control/control.module').then(m => m.ControlModule) },
  { path: 'city', loadChildren: () => import('../../modulos/privado/ciudad/ciudad.module').then(m => m.CiudadModule) },
  { path: 'user', loadChildren: () => import('../../modulos/privado/usuario/usuario.module').then(m => m.UsuarioModule) },


  { path: '', redirectTo: 'board', pathMatch: 'full' },
  { path: '**', component: ErrorSeguridadComponent }
];
