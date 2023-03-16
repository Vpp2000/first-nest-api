import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
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
  public getCarById(@Param('id') id: string) {
    const car = this.carService.getCarById(id);
    return car;
  }

  @Post()
  public createCar(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  public updateCar(@Param('id') id: string, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  public deleteCar(@Param('id') id: string) {
    return {
      method: 'delete',
      id,
    };
  }
}
