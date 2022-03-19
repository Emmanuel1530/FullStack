import { ErrorSeguridadComponent } from './../control/error-seguridad/error-seguridad.component';
import { PerfilComponent } from './perfil/perfil.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes:Routes=[
  {path:'profile',component:PerfilComponent},
  {path:'',redirectTo:'profile',pathMatch:'full'},
  {path:'**',component:ErrorSeguridadComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UsuarioRoutingModule { }
