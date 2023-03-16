import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
//@UsePipes(ValidationPipe)
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
  public createCar(@Body() createCarDto: CreateCarDto) {
    const newCar = this.carService.createCar(createCarDto);
    return newCar;
  }

  @Patch(':id')
  public updateCar(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() body: UpdateCarDto,
  ) {
    const updateCar = this.carService.updateCar(body, id);
    return updateCar;
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
