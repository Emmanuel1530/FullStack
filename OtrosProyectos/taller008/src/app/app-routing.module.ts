import { DashboardComponent } from './componente/dashboard/dashboard.component';
import { NoEncontradoComponent } from './componente/no-encontrado/no-encontrado.component';
import { PropietarioCarroComponent } from './componente/propietario-carro/propietario-carro.component';
import { PrincipalComponent } from './componente/principal/principal.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroAdministrarComponent } from './componente/carro-administrar/carro-administrar.component';

const routes: Routes = [
  {
    path: 'dash', component: DashboardComponent, children: [
      { path: 'principal', component: PrincipalComponent },
      { path: 'carro', component: CarroAdministrarComponent },
      { path: 'propietario', component: PropietarioCarroComponent },
      { path: 'propietarioCarro', component: PropietarioCarroComponent },

      {path:'',redirectTo:'principal',pathMatch:'full'},
      { path: '**', component: NoEncontradoComponent },
    ]
  },

  { path: 'inicio', component: InicioComponent },

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: NoEncontradoComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
