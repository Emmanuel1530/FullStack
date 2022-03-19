export class Ciudad {
  public codigoCiudad: number;
  public fechaFundacionCiudad: string;
  public nombreCiudad: string;
  public nombreFotoCiudad: string;
  public base64FotoCiudad: string;

  public constructor(cod: number, fec: string, nom: string, fot: string, bas: string) {
    this.codigoCiudad = cod;
    this.fechaFundacionCiudad = fec;
    this.nombreCiudad = nom;
    this.nombreFotoCiudad = fot;
    this.base64FotoCiudad = bas;
  }
}
