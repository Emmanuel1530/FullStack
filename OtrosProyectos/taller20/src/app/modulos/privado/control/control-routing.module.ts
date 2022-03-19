import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ErrorSeguridadComponent } from './error-seguridad/error-seguridad.component';

const routes: Routes = [
  { path: 'root', component: BienvenidaComponent },

  { path: '', redirectTo: 'root', pathMatch: 'full' },
  { path: '**', component: ErrorSeguridadComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ControlRoutingModule { }
