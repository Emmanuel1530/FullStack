import { PropietarioDetalleComponent } from './componentes/propietario-detalle/propietario-detalle.component';
import { PropietarioCarrosComponent } from './componentes/propietario-carros/propietario-carros.component';
import { CarrosComponent } from './componentes/carros/carros.component';
import { NoencontradoComponent } from './componentes/noencontrado/noencontrado.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenerosDashComponent } from './dashboard/contenedor-dash/conteneros-dash.component';
import { InicioDashComponent } from './dashboard/inicio-dash/inicio-dash.component';
import { PropietarioComponent } from './componentes/propietario/propietario.component';
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },

  {
    path: 'dash',
    component: ContenerosDashComponent,
    children: [
      { path: 'inicioDash', component: InicioDashComponent },
      { path: 'carsAdmin', component: CarrosComponent },
      { path: 'propAdmin', component: PropietarioComponent },

      {
        path: 'propAdminCarros',
        component: PropietarioCarrosComponent,
        children: [
          { path: '', component: PropietarioDetalleComponent },
          { path: 'detalle/:codPropietario', component: PropietarioDetalleComponent}
        ],
      },

      { path: '', redirectTo: 'inicioDash', pathMatch: 'full' },
      { path: '**', component: NoencontradoComponent },
    ],
  },

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: NoencontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
