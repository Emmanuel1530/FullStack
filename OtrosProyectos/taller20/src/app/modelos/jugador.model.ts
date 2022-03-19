import { Imagen } from './imagen.model';
import { Usuario } from './usuario.model';

export class Jugador extends Usuario {
  public posicionJugador: number;
  public dorsalJugador: string;

  public constructor(
    cod: number,
    fotIm: Imagen,
    nom: string,
    ape: string,
    cor: string,
    cla: string,
    pos: number,
    dor: string
  ) {
    super(cod, fotIm, nom, ape, cor, cla);
    this.posicionJugador = pos;
    this.dorsalJugador = dor;
  }
}

