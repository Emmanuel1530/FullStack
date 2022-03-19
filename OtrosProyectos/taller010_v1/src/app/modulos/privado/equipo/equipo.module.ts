import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoRoutingModule } from './equipo-routing.module';
import { EquipoCrearComponent } from './equipo-crear/equipo-crear.component';
import { EquipoAdministrarComponent } from './equipo-administrar/equipo-administrar.component';
import { EquipoEditarComponent } from './equipo-editar/equipo-editar.component';

@NgModule({
  declarations: [
    EquipoCrearComponent,
    EquipoAdministrarComponent,
    EquipoEditarComponent,
  ],
  imports: [
    CommonModule,
    EquipoRoutingModule,
    NgxPaginationModule,
    FormsModule,
  ],
})
export class EquipoModule {}
