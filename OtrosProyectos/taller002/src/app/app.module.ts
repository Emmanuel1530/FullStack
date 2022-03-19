import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Compu001Component } from './misComponentes/compu001/compu001.component';
import { Compu002Component } from './misComponentes/compu002/compu002.component';
import { Compu003Component } from './misComponentes/compu003/compu003.component';
import { Compu004Component } from './misComponentes/compu004/compu004.component';

@NgModule({
  declarations: [
    AppComponent,
    Compu001Component,
    Compu002Component,
    Compu003Component,
    Compu004Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
