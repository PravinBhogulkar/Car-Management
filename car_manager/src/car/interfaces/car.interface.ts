/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface ICar extends Document {
   id: string;
   brand: string;
   color: string;
   model: string;
}
