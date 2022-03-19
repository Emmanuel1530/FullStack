import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoAdministrarComponent } from './equipo-administrar/equipo-administrar.component';
import { EquipoCrearComponent } from './equipo-crear/equipo-crear.component';
import { EquipoEditarComponent } from './equipo-editar/equipo-editar.component';

const routes:Routes=[
  {path:'manageTeam',component:EquipoAdministrarComponent},
  {path:'create',component:EquipoCrearComponent},
  {path:'update/:codEquipo',component:EquipoEditarComponent},
  {path:'',redirectTo:'manageTeam',pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class EquipoRoutingModule { }
