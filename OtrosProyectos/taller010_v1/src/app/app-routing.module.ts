import { RUTAS_DASHBOARD } from './utilidades/rutas/dashboard-rutas';
import { ContenedorDashComponent } from './modulos/contenedor/dashboard/contenedor-dash/contenedor-dash.component';
import { ErrorComponent } from './modulos/publico/error/error.component';
import { RUTAS_LANDSCAPE } from './utilidades/rutas/landscape-rutas';
import { ContenedorLandComponent } from './modulos/contenedor/landscape/contenedor-land/contenedor-land.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:ContenedorLandComponent,children:RUTAS_LANDSCAPE},
  {path:'dash',component:ContenedorDashComponent,children:RUTAS_DASHBOARD},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
