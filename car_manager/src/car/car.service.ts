import { Injectable } from '@nestjs/common';
import { HttpException, NotFoundException } from '@nestjs/common/exceptions';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICar } from './interfaces/car.interface';

@Injectable()
export class CarService {
  constructor(@InjectModel('Car') private readonly carModel: Model<ICar>) {}
  async getCars(): Promise<ICar[]> {
    const cars = await this.carModel.find().exec();
    if (!cars) {
      throw new HttpException('Not Found', 404);
    }
    return cars;
  }

  async postCar(nawcar: ICar) {
    const car = new this.carModel(nawcar);
    return car.save();
  }

  async getCarById(id: string): Promise<ICar> {
    const car = await this.findCar(id);
    if (!car) {
      throw new HttpException('Not Found', 404);
    }
    return car;
  }

  async deleteCarById(id: string) {
    const car = await this.carModel.deleteOne({ _id: id }).exec();
    if (car.deletedCount === 0) {
      throw new HttpException('Not Found', 404);
    }
    return car;
  }

  async putCarById(carId: string, brand: string, color: string, model: string) {
    const updatedCar = await this.findCar(carId);
    if (brand) {
      updatedCar.brand = brand;
    }
    if (color) {
      updatedCar.color = color;
    }
    if (model) {
      updatedCar.model = model;
    }
    updatedCar.save();
    // if (!updatedCar) {
    //   throw new HttpException('Not Found', 404);
    // }
    return updatedCar.id;
  }

  private async findCar(id: string): Promise<ICar> {
    let Car;
    try {
      Car = await this.carModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Could not find Car.');
    }
    // if (!Car) {
    //   throw new NotFoundException('Could not find Car.');
    // }
    return Car;
  }
}
