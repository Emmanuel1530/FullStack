import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoRoutingModule } from './equipo-routing.module';
import { EquipoCrearComponent } from './equipo-crear/equipo-crear.component';
import { EquipoEditarComponent } from './equipo-editar/equipo-editar.component';
import { EquipoAdministrarComponent } from './equipo-administrar/equipo-administrar.component';



@NgModule({
  declarations: [
    EquipoCrearComponent,
    EquipoEditarComponent,
    EquipoAdministrarComponent
  ],
  imports: [
    CommonModule,
    EquipoRoutingModule
  ]
})
export class EquipoModule { }
