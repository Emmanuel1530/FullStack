import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorRoutingModule } from './jugador-routing.module';
import { JugadorAdministrarComponent } from './jugador-administrar/jugador-administrar.component';
import { JugadorCrearComponent } from './jugador-crear/jugador-crear.component';
import { JugadorDetalleComponent } from './jugador-detalle/jugador-detalle.component';
import { JugadorEditarComponent } from './jugador-editar/jugador-editar.component';
import { JugadorEquipoComponent } from './jugador-equipo/jugador-equipo.component';



@NgModule({
  declarations: [
    JugadorAdministrarComponent,
    JugadorCrearComponent,
    JugadorDetalleComponent,
    JugadorEditarComponent,
    JugadorEquipoComponent
  ],
  imports: [
    CommonModule,
    JugadorRoutingModule
  ]
})
export class JugadorModule { }
