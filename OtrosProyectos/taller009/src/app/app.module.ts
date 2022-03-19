import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';


import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from "ngx-pagination";
import { CabeceraComponent } from './dashboard/cabecera/cabecera.component';
import { ContenerosDashComponent } from './dashboard/contenedor-dash/conteneros-dash.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CarrosComponent } from './componentes/carros/carros.component';
import { NoencontradoComponent } from './componentes/noencontrado/noencontrado.component';
import { PropietarioComponent } from './componentes/propietario/propietario.component';
import { PropietarioCarrosComponent } from './componentes/propietario-carros/propietario-carros.component';
import { PropietarioDetalleComponent } from './componentes/propietario-detalle/propietario-detalle.component';
import { InicioDashComponent } from './dashboard/inicio-dash/inicio-dash.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ContenerosDashComponent,
    InicioComponent,
    CarrosComponent,
    NoencontradoComponent,
    PropietarioComponent,
    PropietarioCarrosComponent,
    PropietarioDetalleComponent,
    InicioDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
