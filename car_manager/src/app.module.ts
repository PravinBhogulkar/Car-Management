import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://healthcare:Final_project@cluster0.bd6hcxs.mongodb.net/car_manager?retryWrites=true&w=majority',
    ),
    CarModule,
  ],
})
export class AppModule {}
