export class Usuario {
  public codigoUsuario: number;
  public nombresUsuario: string;
  public apellidosUsuario: string;
  public correoUsuario: string;
  public claveUsuario: string;
  public nombreFotoUsuario: string;
  public base64FotoUsuario: string;
  public reClaveUsuario?: string;

  public constructor(cod: number, nom: string, ape: string, cor: string, cla: string, fot: string, bas: string) {
    this.codigoUsuario = cod;
    this.nombresUsuario = nom;
    this.apellidosUsuario = ape;
    this.correoUsuario = cor;
    this.claveUsuario = cla;
    this.nombreFotoUsuario = fot;
    this.base64FotoUsuario = bas;
  }
}
