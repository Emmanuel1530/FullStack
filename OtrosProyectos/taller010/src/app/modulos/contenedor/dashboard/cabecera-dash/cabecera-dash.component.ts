import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera-dash',
  templateUrl: './cabecera-dash.component.html',
  styleUrls: ['./cabecera-dash.component.css']
})
export class CabeceraDashComponent implements OnInit {

  constructor(public miRuta:Router) { }

  ngOnInit(): void {
  }
public cerrarSesion():void{
  localStorage.removeItem('FullStackCodigo');
 this.miRuta.navigate(['/welcome/login']);
}
}

