import { Imagen } from './imagen.model';

export class Usuario {
  public codigoUsuario: number;
  public fotoUsuario: Imagen;
  public nombresUsuario: string;
  public apellidosUsuario: string;
  public correoUsuario: string;
  public claveUsuario: string;
  public reClaveUsuario?: string;
  public token?: string = '';
  public foto?: string = '';
  public constructor(
    cod: number,
    fotIm: Imagen,
    nom: string,
    ape: string,
    cor: string,
    cla: string
  ) {
    this.codigoUsuario = cod;
    this.fotoUsuario = fotIm;
    this.nombresUsuario = nom;
    this.apellidosUsuario = ape;
    this.correoUsuario = cor;
    this.claveUsuario = cla;
    this.token = '';
    this.foto = '';
  }
}

