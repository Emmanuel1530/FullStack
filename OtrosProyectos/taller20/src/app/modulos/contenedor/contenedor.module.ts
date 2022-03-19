import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CabeceraLandComponent } from './landscape/cabecera-land/cabecera-land.component';
import { CabeceraDashComponent } from './dashboard/cabecera-dash/cabecera-dash.component';
import { ContenedorLandComponent } from './landscape/contenedor-land/contenedor-land.component';
import { ContenedorDashComponent } from './dashboard/contenedor-dash/contenedor-dash.component';


@NgModule({
  declarations: [
    CabeceraLandComponent,
    ContenedorLandComponent,
    CabeceraDashComponent,
    ContenedorDashComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CabeceraLandComponent,
    ContenedorLandComponent
  ]
})
export class ContenedorModule { }
