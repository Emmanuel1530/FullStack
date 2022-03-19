import { EquipoEditarComponent } from './equipo-editar/equipo-editar.component';
import { EquipoCrearComponent } from './equipo-crear/equipo-crear.component';
import { EquipoAdministrarComponent } from './equipo-administrar/equipo-administrar.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'manageteam', component: EquipoAdministrarComponent },
  { path: 'create', component: EquipoCrearComponent },
  { path: 'update/:codigoequipo', component: EquipoEditarComponent },

  { path: '', redirectTo: 'manageteam', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class EquipoRoutingModule {}
