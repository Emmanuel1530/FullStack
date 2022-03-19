import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { ErrorComponent } from './error/error.component';
import { InicioComponent } from './inicio/inicio.component';
import { AccesoComponent } from './acceso/acceso.component';
import { PublicoRoutingModule } from './publico-routing.module';
import { ContenedorModule } from './../contenedor/contenedor.module';
import { DesarrolladoresComponent } from './desarrolladores/desarrolladores.component';

@NgModule({
  declarations: [
    InicioComponent,
    AccesoComponent,
    ErrorComponent,
    DesarrolladoresComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ContenedorModule,
    PublicoRoutingModule,
    ToastrModule.forRoot(),
  ]
})
export class PublicoModule { }
