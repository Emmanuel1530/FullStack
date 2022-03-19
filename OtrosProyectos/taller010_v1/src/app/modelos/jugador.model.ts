import { Usuario } from './usuario.model';

export class Jugador extends Usuario {
  public posicionJugador: number;
  public dorsalJugador: string;

  public constructor(cod: number, nom: string, ape: string, cor: string, cla: string, fot: string, bas: string, pos: number, dor: string) {
    super(cod, nom, ape, cor, cla, fot, bas);
    this.posicionJugador = pos;
    this.dorsalJugador = dor;
  }

}
