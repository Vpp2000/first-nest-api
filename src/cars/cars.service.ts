import { Injectable } from '@nestjs/common';

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
    return this.cars.find((car) => car.id === id);
  }
}
