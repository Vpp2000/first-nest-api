import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars: any[] = [
    {
      id: 1,
      name: 'toyota',
    },
    {
      id: 2,
      name: 'jeep',
    },
    {
      id: 3,
      name: 'honda',
    },
  ];

  public getAllCars(): any[] {
    return this.cars;
  }

  public getCarById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (car == null) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }
}
