import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[];

  public getAllCars(): Car[] {
    return this.cars;
  }

  public getCarById(id: string): Car {
    const car: Car = this.cars.find((car) => car.id === id);

    if (car == null) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  public createCar(createCarDto: CreateCarDto): Car {
    const newCar: Car = {
      id: uuidv4(),
      ...createCarDto,
    };

    this.cars.unshift(newCar);

    return newCar;
  }

  public updateCar(updateCarDto: UpdateCarDto, id: string): Car {
    let carDB = this.getCarById(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException('Car is is not valid insode body');

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }

      return car;
    });

    return carDB;
  }

  public deleteCarById(id: string): void {
    const carDB = this.getCarById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
