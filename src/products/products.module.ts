/* eslint-disable*/
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { Module } from "@nestjs/common";
import { Mongoose } from "mongoose";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "./product.schema";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    MongooseModule.forFeature([
      {name: Product.name, schema: ProductSchema} // Product.name - это не поле, а тупо название Класса
    ])
  ]
})

export class ProductsModule {}