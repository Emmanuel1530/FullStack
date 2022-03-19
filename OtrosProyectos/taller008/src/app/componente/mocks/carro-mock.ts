import { Carro } from '../modelos/carro';
import { ARREGLO_PROPIETARIOS } from './propietario.mock';

export const ARREGLO_CARROS: Array<Carro> = [
  new Carro(1, 'KJR-928', 'Chevrolet', 2013, ARREGLO_PROPIETARIOS[0], '', ''),
  new Carro(2, 'AMV-123', 'Mazda', 2010, ARREGLO_PROPIETARIOS[2], '', ''),
  new Carro(3, 'LOP-999', 'Nissan', 2020, ARREGLO_PROPIETARIOS[5], '', ''),
  new Carro(4, 'CAN-365', 'Toyota', 2018, ARREGLO_PROPIETARIOS[6], '', ''),
  new Carro(5, 'CCC-478', 'Ferrari', 2015, ARREGLO_PROPIETARIOS[7], '', ''),
  new Carro(6, 'XXX-951', 'Ranult', 2016, ARREGLO_PROPIETARIOS[1], '', ''),
  new Carro(9, 'BUA-149', 'Suzuki', 2005, ARREGLO_PROPIETARIOS[8], '', ''),
  new Carro(10, 'CAL-379', 'Wolskwagen', 2012, ARREGLO_PROPIETARIOS[3], '', ''),
  new Carro(11, 'MED-496', 'BMW', 2014, ARREGLO_PROPIETARIOS[3], '', ''),
  new Carro(12, 'ENV-124', 'Acura', 2007, ARREGLO_PROPIETARIOS[2], '', ''),
  new Carro(13, 'BOG-369', 'Bentley', 2006, ARREGLO_PROPIETARIOS[1], '', ''),
];
