import { ErrorSeguridadComponent } from './../../modulos/privado/control/error-seguridad/error-seguridad.component';
import { Routes } from '@angular/router';

export const RUTAS_DASHBOARD:Routes=[
{path:'board',loadChildren:()=>import('../../modulos/privado/control/control.module').then(m=>m.ControlModule)},
{path:'city',loadChildren:()=>import('../../modulos/privado/ciudad/ciudad.module').then(m=>m.CiudadModule)},
{path:'team',loadChildren:()=>import('../../modulos/privado/equipo/equipo.module').then(m=>m.EquipoModule)},
{path:'player',loadChildren:()=>import('../../modulos/privado/jugador/jugador.module').then(m=>m.JugadorModule)},

{path:'',redirectTo:'board',pathMatch:'full'},
{path:'**',component:ErrorSeguridadComponent},
];
