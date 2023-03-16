import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
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
  public getCarById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    const car = this.carService.getCarById(id);
    return car;
  }

  @Post()
  public createCar(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  public updateCar(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() body: any,
  ) {
    return body;
  }

  @Delete(':id')
  public deleteCar(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return {
      method: 'delete',
      id,
    };
  }
}
