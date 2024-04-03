import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
// import { CarDto } from './car.dto';
import { CarService } from './car.service';
import { ICar } from './interfaces/car.interface';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  public getCars() {
    return this.carService.getCars();
  }

  @Post()
  public postCar(@Body() car: ICar) {
    return this.carService.postCar(car);
  }

  @Get(':id')
  public async getCarById(@Param('id') id: string) {
    return this.carService.getCarById(id);
  }

  @Delete(':id')
  public async deleteCarById(@Param('id') id: string) {
    return this.carService.deleteCarById(id);
  }

  // @Put(':id')
  // public async putCarById(@Param('id') id: string, @Query() query) {
  //   const proertyName = query.property_name;
  //   const propertyValue = query.property_value;
  //   return this.carService.putCarById(id, proertyName, propertyValue);
  // }

  @Patch(':id')
  async putCarById(
    @Param('id') carId: string,
    @Body('brand') carBrand: string,
    @Body('color') carColor: string,
    @Body('model') carModel: string,
  ) {
    return await this.carService.putCarById(
      carId,
      carBrand,
      carColor,
      carModel,
    );
  }
}
