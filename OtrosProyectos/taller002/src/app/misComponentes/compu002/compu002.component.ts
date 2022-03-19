import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compu002',
  templateUrl: './compu002.component.html',
  styleUrls: ['./compu002.component.css']
})
export class Compu002Component implements OnInit {
public otraVariable:string;
  constructor() {
    this.otraVariable="esto es un titulo tipo parrafo ";
  }

  ngOnInit(): void {
  }

}
