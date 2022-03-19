import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-noencontrado',
  templateUrl: './noencontrado.component.html',
  styleUrls: ['./noencontrado.component.css']
})
export class NoencontradoComponent implements OnInit {

  constructor(private destino: Location) { }

  ngOnInit(): void {
  }
  public regresar():void{
    this.destino.back();
  }

}
