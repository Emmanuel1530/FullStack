import { Routes } from '@angular/router';

export const RUTAS_LANDSCAPE: Routes = [
  { path: 'welcome', loadChildren: () => import('../../modulos/publico/publico.module').then(m => m.PublicoModule) },

  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];
