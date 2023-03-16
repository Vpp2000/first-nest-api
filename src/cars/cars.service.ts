import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
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

  public getAllCars(): Car[] {
    return this.cars;
  }

  public getCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (car == null) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }
}
