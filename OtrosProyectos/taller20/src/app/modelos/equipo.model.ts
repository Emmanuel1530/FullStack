import { Ciudad } from './ciudad.model';

export class Equipo {
  public codigoEquipo: number;
  public ciudad: Ciudad;
  public nombreEquipo: string;
  public fechaFundacionEquipo: string;
  public estadioEquipo: string;
  public nombreFotoEquipo: string;
  public base64FotoEquipo: string;

  constructor(
    cod: number,
    ciu: Ciudad,
    nom: string,
    fec: string,
    est: string,
    fot: string,
    bas: string
  ) {
    this.codigoEquipo = cod;
    this.ciudad = ciu;
    this.nombreEquipo = nom;
    this.fechaFundacionEquipo = fec;
    this.estadioEquipo = est;
    this.nombreFotoEquipo = fot;
    this.base64FotoEquipo = bas;
  }
}

