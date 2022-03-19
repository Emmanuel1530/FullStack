export class Imagen {
  public codimagen: number;
  public nombrepublicoimagen: string;
  public nombreprivadoimagen: string;
  public tipoimagen: string;
  public tamanoimagen: string;
  public fechacreacionimagen: string;
  public base64: string;

  constructor(
    codi: number,
    nom: string,
    nomp: string,
    tipo: string,
    tama: string,
    fec: string,
    base: string
  ) {
    this.codimagen = codi;
    this.nombrepublicoimagen = nom;
    this.nombreprivadoimagen = nomp;
    this.tipoimagen = tipo;
    this.tamanoimagen = tama;
    this.fechacreacionimagen = fec;
    this.base64 = base;
  }
}
