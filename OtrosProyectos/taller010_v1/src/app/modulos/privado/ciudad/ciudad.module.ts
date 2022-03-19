import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiudadRoutingModule } from './ciudad-routing.module';
import { CiudadCrearComponent } from './ciudad-crear/ciudad-crear.component';
import { CiudadAdministrarComponent } from './ciudad-administrar/ciudad-administrar.component';
import { CiudadEditarComponent } from './ciudad-editar/ciudad-editar.component';



@NgModule({
  declarations: [
    CiudadCrearComponent,
    CiudadAdministrarComponent,
    CiudadEditarComponent
  ],
  imports: [
    CommonModule,
    CiudadRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class CiudadModule { }
