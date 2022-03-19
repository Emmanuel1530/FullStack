import { CiudadAdministrarComponent } from './ciudad-administrar/ciudad-administrar.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'manageCity', component: CiudadAdministrarComponent },
  { path: '', redirectTo: 'manageCity', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiudadRoutingModule {}
