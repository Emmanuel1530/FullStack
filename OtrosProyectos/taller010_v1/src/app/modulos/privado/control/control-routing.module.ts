import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes:Routes =[
  {path:'root',component:BienvenidaComponent},
  {path:'',redirectTo:'root',pathMatch:'full'}
];

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
export class ControlRoutingModule { }
