import { ARREGLO_CIUDADES } from './../../../../mocks/ciudad.mock';
import { ARREGLO_EQUIPOS } from './../../../../mocks/equipo.mock';
import { Ciudad } from './../../../../modelos/ciudad.model';
import { Equipo } from './../../../../modelos/equipo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-equipo-editar',
  templateUrl: './equipo-editar.component.html',
  styleUrls: ['./equipo-editar.component.css'],
})
export class EquipoEditarComponent implements OnInit {
  public arregloEquipos: Equipo[];
  public arregloCiudades: Ciudad[];

  public equipoSeleccionado: Equipo;

  public tmpBase64: any;

  constructor(private route: ActivatedRoute,public miRuta:Router,) {
    this.arregloEquipos = ARREGLO_EQUIPOS;
    this.arregloCiudades = ARREGLO_CIUDADES;
    this.equipoSeleccionado = this.inicializarEquipo();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parametro: ParamMap) => {
      const miCodigo = String(parametro.get('codEquipo'));
      const miCodigoNumerico = parseFloat(miCodigo);

      this.arregloEquipos.filter((objEquipo) => {
        if (objEquipo.codigoEquipo === miCodigoNumerico) {
          this.equipoSeleccionado = objEquipo;
        }
      });
    });
  }

  public inicializarEquipo(): Equipo {
    return new Equipo(0, this.inicializarCiudad(), '', '', '', '', '');
  }

  public inicializarCiudad(): Ciudad {
    return new Ciudad(0, '', '', '', '');
  }

  public actualizarEquipo() {
    this.miRuta.navigate(['/dash/team/manageTeam']);
    this.inicializarEquipo();
  }

  //Metodo para cargar la foto
  public seleccionarFoto(objeto:any):void{
    let caja = objeto.target.files[0];
    if (!caja || caja.length == 0) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(caja);
    reader.onload=()=>{
      this.tmpBase64=reader.result;
      this.equipoSeleccionado.nombreFotoEquipo = caja.name;
      this.equipoSeleccionado.base64FotoEquipo = this.tmpBase64;
    }
  }
}
