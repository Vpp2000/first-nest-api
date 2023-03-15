import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  private cars: any[] = ['toyota', 'honda', 'jeep '];

  constructor(private readonly carService: CarsService) {}
  @Get()
  public getAllCars(): any[] {
    return this.carService.getAllCars();
  }

  @Get(':id')
  public getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carService.getCarById(id);
  }
}
