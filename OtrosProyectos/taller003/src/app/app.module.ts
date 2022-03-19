import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Compo001Component } from './losCompis/compo001/compo001.component';
import { Compo002Component } from './losCompis/compo002/compo002.component';

@NgModule({
  declarations: [
    AppComponent,
    Compo001Component,
    Compo002Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
