import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compu003',
  templateUrl: './compu003.component.html',
  styleUrls: ['./compu003.component.css']
})
export class Compu003Component implements OnInit {
public miVariable: string;
  constructor() {
    this.miVariable="Estoy en el componente 3";
  }

  ngOnInit(): void {
  }

}
