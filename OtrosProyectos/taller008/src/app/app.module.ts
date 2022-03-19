import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { CabeceraComponent } from './componente/cabecera/cabecera.component';
import { PrincipalComponent } from './componente/principal/principal.component';
import { CarroAdministrarComponent } from './componente/carro-administrar/carro-administrar.component';
import { PropietarioAdministrarComponent } from './componente/propietario-administrar/propietario-administrar.component';
import { PropietarioCarroComponent } from './componente/propietario-carro/propietario-carro.component';
import { NoEncontradoComponent } from './componente/no-encontrado/no-encontrado.component';
import { DashboardComponent } from './componente/dashboard/dashboard.component';

import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CabeceraComponent,
    PrincipalComponent,
    CarroAdministrarComponent,
    PropietarioAdministrarComponent,
    PropietarioCarroComponent,
    NoEncontradoComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
