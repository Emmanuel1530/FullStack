import { VigilanteGuard } from './vigilante.guard';
import { RUTAS_DASHBOARD } from './utilidades/rutas/dashboard-rutas';
import { ContenedorDashComponent } from './modulos/contenedor/dashboard/contenedor-dash/contenedor-dash.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RUTAS_LANDSCAPE } from './utilidades/rutas/landscape-rutas';
import { ErrorComponent } from './modulos/publico/error/error.component';
import { ContenedorLandComponent } from './modulos/contenedor/landscape/contenedor-land/contenedor-land.component';

const routes: Routes = [
  { path: '', component: ContenedorLandComponent, children: RUTAS_LANDSCAPE },
  {
    path: 'dash',
    component: ContenedorDashComponent,
    children: RUTAS_DASHBOARD,
    canActivate: [VigilanteGuard],
  },

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
