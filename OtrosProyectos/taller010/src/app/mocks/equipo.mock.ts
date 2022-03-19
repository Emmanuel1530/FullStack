import { ARREGLO_CIUDADES } from './ciudad.mock';
import { Equipo } from './../modelos/equipo.model';

export let ARREGLO_EQUIPOS: Array<Equipo> = [
  new Equipo(0, ARREGLO_CIUDADES[0], 'Seleccione Equipo', '', '', '', ''),
  new Equipo(1, ARREGLO_CIUDADES[1], 'America', '1927-02-13', 'Estadio Pascual Guerrero', '', ''),
  new Equipo(2, ARREGLO_CIUDADES[2], 'Deportes Tolima', '1954-12-18', 'Manuel Murillo Toro', '', ''),
  new Equipo(3, ARREGLO_CIUDADES[3], 'Atlético Nacional', '1947-03-07', 'Estadio Atanasio Girardot', '', ''),
  new Equipo(4, ARREGLO_CIUDADES[4], 'Millonarios FC', '1946-06-18', 'El Campín', '', ''),
  new Equipo(5, ARREGLO_CIUDADES[5], 'Deportivo Pereira', '1944-02-12', 'Hernán Ramírez Villegas', '', ''),
  new Equipo(6, ARREGLO_CIUDADES[6], 'Deportivo Pasto', '1949-10-12', 'Departamental Libertad', '', ''),
  new Equipo(7, ARREGLO_CIUDADES[7], 'Patriotas Boyacá', '2003-01-01', 'La Independencia', '', ''),
  new Equipo(8, ARREGLO_CIUDADES[8], 'Club Atlético Bucaramanga​', '1927-02-13', 'Alfonso López', '', ''),
  new Equipo(9, ARREGLO_CIUDADES[1], 'Deportivo Cali', '1912-11-23', 'Estadio Pascual Guerrero', '', ''),
  new Equipo(10, ARREGLO_CIUDADES[4], 'Independiente Santa Fe', '1941-02-28', 'El Campín', '', ''),

];
