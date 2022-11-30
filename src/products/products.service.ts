/* eslint-disable*/
/*  Это сервис, то есть "Model" по терминологии MVC.
ЗДесь идёт КРУД в БД Монго  */

import { Injectable } from '@nestjs/common';
import { CreateProductDto } from "./dto/create-product.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./product.schema";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductsService {
  // внедрить модель Product в ProductsService
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {
  }

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getById(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async create(productDTO:CreateProductDto): Promise<Product>{
    const newProduct = new this.productModel(productDTO);
    return newProduct.save();
  }

  async remove(id:string): Promise<Product>{
    return this.productModel.findByIdAndRemove(id).exec();
  }

  async update(id:string, productDTO: UpdateProductDto): Promise<Product>{
    return this.productModel.findByIdAndUpdate(id, productDTO, {new:true}).exec();
  }
}