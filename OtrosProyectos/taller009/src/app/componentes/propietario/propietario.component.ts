import { mostrarMensaje } from 'src/app/utilidades/mensajes.func';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ARREGLO_PROPIETARIOS } from './../../mocks/propietario.mock';
import { Propietario } from './../../modelos/propietario.model';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {

  public propietarioSeleccionado: Propietario;
  public arregloPropietario: Propietario[];


  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo: string;
  public modalContenido: string;



  public tmpBase64: any;

  constructor(public miModal: BsModalService, public miMensaje: ToastrService) {

    this.propietarioSeleccionado= this.inicializarPropietario();
    this.arregloPropietario=ARREGLO_PROPIETARIOS;
    this.tmpBase64 = null;


    this.modalRef = this.tmpBase64;
    this.modalTitulo = "";
    this.modalCuerpo = "";
    this.modalContenido = "";
   }

  ngOnInit(): void {
  }

   //*******************************************************************


public inicializarPropietario():Propietario{
return new Propietario(0,'','','','','','');
}

public seleccionarPropietario(objPropietario: Propietario): void {
  this.propietarioSeleccionado = objPropietario;
}
public resetearPropietario(): void {
  this.propietarioSeleccionado = this.inicializarPropietario();

}

public datosValidos(): boolean {
  let bandera = true;
  if (this.propietarioSeleccionado.apellidos == "" ||
    this.propietarioSeleccionado.nombre == "" ||
    this.propietarioSeleccionado.codigo == 0 ||
    this.propietarioSeleccionado.documento == "" ||
    this.propietarioSeleccionado.telefono == "") {
    bandera = false;
  }
  return bandera;
}
//*************Aca viene logoca del negocio  */

public agregarPropietarios(): void {
  if (this.datosValidos()) {
    this.propietarioSeleccionado.codigo = this.arregloPropietario.length + 1;
    this.arregloPropietario.push(this.propietarioSeleccionado);
    this.resetearPropietario();
  } else {
    mostrarMensaje("Error", "No se pueden crear carros </br> con campos vacios",
      "Advertencia", this.miMensaje
    );
  }
}

public borrarPropietario(objCarro: Propietario): void {
  let pos = 0;
  this.arregloPropietario.forEach(function (dato, indice, arreglo) {
    if (arreglo[indice] === objCarro) {
      pos = indice;
    }
  });
  this.arregloPropietario.splice(pos, 1);
  this.resetearPropietario();
}


public actualizarPropietario(): void {
  if (this.datosValidos()) {
    this.resetearPropietario();
  } else {
    mostrarMensaje(
      'Warning', 'No se puede actualizar carros <br/>con campos vacios',
      'advertencia', this.miMensaje
    );
  }
}


 //*************   aca vienen el metodo cargar la foto, este es el tomasino */


 public seleccionarFoto(objeto: any): any {
  let caja = objeto.target.files[0];
  if (!caja || caja.length == 0) {
    return;
  }
  if (caja.type.match(/image\/*/) == null) {
    return;
  }

  const reader = new FileReader();
  reader.readAsDataURL(caja);
  reader.onload = () => {
    this.tmpBase64 = reader.result;

    this.propietarioSeleccionado.nombreFoto = caja.name;
    this.propietarioSeleccionado.fotobase64 = this.tmpBase64;

  };
}


 //*********************** Metodo para las ventanas modales*********************** */
 public abrirModal(plantilla: TemplateRef<any>, objPro: Propietario):void{
  this.propietarioSeleccionado = objPro;
  this.modalRef = this.miModal.show(plantilla, {class: 'modal-md'});
  this.modalTitulo = 'Advertencia';
  this.modalCuerpo = '¿Realmente quiere eliminar el propietario?';
  this.modalContenido = objPro.nombre + ' ' + objPro.apellidos;
}

public btnCancel():void{
  this.modalRef.hide();
}

public btnDelete():void{
  this.borrarPropietario(this.propietarioSeleccionado);
  this.btnCancel();
}



}
