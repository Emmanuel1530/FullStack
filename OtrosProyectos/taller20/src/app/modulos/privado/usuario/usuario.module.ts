import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule
  ]
})
export class UsuarioModule { }
