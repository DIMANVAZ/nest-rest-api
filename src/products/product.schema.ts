/* eslint-disable*/
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({}) // опции, которые должны бы пойти в Mongoose.connect
export class Product {

  @Prop({required: true})
  title: string;

  @Prop({required: true})
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);