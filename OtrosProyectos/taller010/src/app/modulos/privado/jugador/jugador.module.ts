import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorRoutingModule } from './jugador-routing.module';
import { JugadorAdministarComponent } from './jugador-administar/jugador-administar.component';
import { JugadorCrearComponent } from './jugador-crear/jugador-crear.component';
import { JugadorDetalleComponent } from './jugador-detalle/jugador-detalle.component';
import { JugadorEditarComponent } from './jugador-editar/jugador-editar.component';
import { JugadorEquipoComponent } from './jugador-equipo/jugador-equipo.component';

@NgModule({
  declarations: [
    JugadorAdministarComponent,
    JugadorCrearComponent,
    JugadorDetalleComponent,
    JugadorEditarComponent,
    JugadorEquipoComponent,
  ],
  imports: [CommonModule, JugadorRoutingModule,NgxPaginationModule,FormsModule],
})
export class JugadorModule {}
