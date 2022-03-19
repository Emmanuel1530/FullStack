import { Imagen } from './imagen.model';

export class Ciudad {
  public codigociudad: number;
  public fechafundacionciudad: string;
  public nombreciudad: string;
  public fotociudad: Imagen;
  public codigoimagen?: number;

  public constructor(cod: number, fec: string, nom: string, foto: Imagen) {
    this.codigociudad = cod;
    this.fechafundacionciudad = fec;
    this.nombreciudad = nom;
    this.fotociudad = foto;
    this.codigociudad = 0;
  }
}
