import { Equipo } from './equipo.model';
import { Jugador } from './jugador.model';

export class JugadorEquipo {
  public jugador: Jugador;
  public equipo: Equipo;
  public temporadas: string;
  public estadoJugadorEquipo: number;

  public constructor(jug: Jugador, equ: Equipo, tem: string, est: number) {
    this.jugador = jug;
    this.equipo = equ;
    this.temporadas = tem;
    this.estadoJugadorEquipo = est;
  }
}
