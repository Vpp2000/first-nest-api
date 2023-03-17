import { v4 as uuidv4 } from 'uuid';
import { Car } from '../../cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuidv4(),
    brand: 'toyota',
    model: 'corolla',
  },
  {
    id: uuidv4(),
    brand: 'jeep',
    model: 'cherokee',
  },
  {
    id: uuidv4(),
    brand: 'honda',
    model: 'civic',
  },
];
