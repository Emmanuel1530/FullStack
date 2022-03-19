import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuidadRoutingModule } from './cuidad-routing.module';
import { CiudadCrearComponent } from './ciudad-crear/ciudad-crear.component';
import { CiudadEditarComponent } from './ciudad-editar/ciudad-editar.component';
import { CiudadAdministrarComponent } from './ciudad-administrar/ciudad-administrar.component';

@NgModule({
  declarations: [
    CiudadCrearComponent,
    CiudadEditarComponent,
    CiudadAdministrarComponent,
  ],
  imports: [
    CommonModule,
    CuidadRoutingModule,
    NgxPaginationModule,
    FormsModule,
  ],
})
export class CiudadModule {}
