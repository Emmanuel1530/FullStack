import { CiudadAdministrarComponent } from './ciudad-administrar/ciudad-administrar.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes =[
 {path: 'managecity', component: CiudadAdministrarComponent},

 {path: '', redirectTo: 'managecity', pathMatch: 'full'}

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
export class CiudadRoutingModule { }
