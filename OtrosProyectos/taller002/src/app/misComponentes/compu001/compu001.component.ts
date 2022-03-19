import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compu001',
  templateUrl: './compu001.component.html',
  styleUrls: ['./compu001.component.css']
})
export class Compu001Component implements OnInit {
public miTitulo:string;
  constructor() {
    this.miTitulo="Este es mi titulo";
   }

  ngOnInit(): void {
  }

}
