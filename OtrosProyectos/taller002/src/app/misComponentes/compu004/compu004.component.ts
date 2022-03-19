import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compu004',
  templateUrl: './compu004.component.html',
  styleUrls: ['./compu004.component.css']
})
export class Compu004Component implements OnInit {
public footer: string;
  constructor() {
    this.footer="Estoy en ultimo componenete";
  }

  ngOnInit(): void {
  }

}
