import { v4 as uuidv4 } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuidv4(),
    name: 'toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'jeep',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'tesla',
    createdAt: new Date().getTime(),
  },
];
