import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicoRoutingModule } from './publico-routing.module';
import { AccesoComponent } from './acceso/acceso.component';
import { DesarrolladoresComponent } from './desarrolladores/desarrolladores.component';
import { ErrorComponent } from './error/error.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContenedorModule } from '../contenedor/contenedor.module';



@NgModule({
  declarations: [
    AccesoComponent,
    DesarrolladoresComponent,
    ErrorComponent,
    InicioComponent
  ],
  imports: [

    FormsModule,
    ContenedorModule,
    ToastrModule.forRoot(),

    CommonModule,
    PublicoRoutingModule
  ]
})
export class PublicoModule { }
