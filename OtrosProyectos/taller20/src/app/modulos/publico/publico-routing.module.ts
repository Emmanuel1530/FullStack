import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorComponent } from './error/error.component';
import { AccesoComponent } from './acceso/acceso.component';
import { InicioComponent } from './inicio/inicio.component';
import { DesarrolladoresComponent } from './desarrolladores/desarrolladores.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'login', component: AccesoComponent },
  { path: 'developer', component: DesarrolladoresComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicoRoutingModule { }
