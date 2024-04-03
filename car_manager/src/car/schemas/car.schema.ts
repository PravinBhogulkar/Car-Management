/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
  brand: {type: String},
  color: {type: String},
  model: {type: String},
});
