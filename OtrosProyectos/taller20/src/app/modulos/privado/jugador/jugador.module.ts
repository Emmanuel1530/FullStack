import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorRoutingModule } from './jugador-routing.module';
import { JugadorCrearComponent } from './jugador-crear/jugador-crear.component';
import { JugadorEditarComponent } from './jugador-editar/jugador-editar.component';
import { JugadorAdministrarComponent } from './jugador-administrar/jugador-administrar.component';
import { JugadorDetalleComponent } from './jugador-detalle/jugador-detalle.component';
import { JugadorEquipoComponent } from './jugador-equipo/jugador-equipo.component';



@NgModule({
  declarations: [
    JugadorCrearComponent,
    JugadorEditarComponent,
    JugadorAdministrarComponent,
    JugadorDetalleComponent,
    JugadorEquipoComponent
  ],
  imports: [
    CommonModule,
    JugadorRoutingModule
  ]
})
export class JugadorModule { }
