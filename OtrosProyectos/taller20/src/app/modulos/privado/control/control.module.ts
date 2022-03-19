import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlRoutingModule } from './control-routing.module';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ErrorSeguridadComponent } from './error-seguridad/error-seguridad.component';



@NgModule({
  declarations: [
    BienvenidaComponent,
    ErrorSeguridadComponent
  ],
  imports: [
    CommonModule,
    ControlRoutingModule
  ]
})
export class ControlModule { }
