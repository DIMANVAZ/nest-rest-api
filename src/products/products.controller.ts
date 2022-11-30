/* eslint-disable*/
/*  Это Контроллер (в т.ч. и по терминологии MVC).
ЗДесь идёт получение http-запросов (и данных из них) и пользование методами из Сервиса  */

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsService } from "./products.service";
import { Product } from "./product.schema";

@Controller('products') // будет доступен по /products/
export class ProductsController {

  constructor(private readonly productsService: ProductsService) {
  }

  @Get()
  getAll(): Promise<Product[]> {  // получаем массив Product-ов
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product> { // получаем 1 Product
    return this.productsService.getById(id);
  }

  @Post()
  create(@Body() body:CreateProductDto): Promise<Product>{
    return this.productsService.create(body);
  }

  @Put(':id')
  update(@Body() body:UpdateProductDto, @Param('id') id: string){
    return this.productsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string){
    return this.productsService.remove(id);
  }
}
