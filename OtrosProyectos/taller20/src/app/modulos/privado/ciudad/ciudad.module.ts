import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';
import { CiudadRoutingModule } from './ciudad-routing.module';
import { CiudadCrearComponent } from './ciudad-crear/ciudad-crear.component';
import { CiudadEditarComponent } from './ciudad-editar/ciudad-editar.component';
import { CiudadAdministrarComponent } from './ciudad-administrar/ciudad-administrar.component';

@NgModule({
  declarations: [
    CiudadCrearComponent,
    CiudadEditarComponent,
    CiudadAdministrarComponent
  ],
  imports: [
    CommonModule,
    CiudadRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class CiudadModule { }
