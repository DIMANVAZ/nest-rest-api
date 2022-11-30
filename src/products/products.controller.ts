/* eslint-disable*/
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";

@Controller('products') // будет доступен по /products/
export class ProductsController {

  @Get()
  getAll(): string {
    return 'Get All';
  }

  /*  громоздкий способ
  @Get(':id')
  getOne(@Param() params): string {
    return `This is one: ${params.id}`
  }                                   */

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return `This is one: ${id}`;
  }

  @Post()
  create(@Body() body:CreateProductDto){
    return `Created new product:\n Title: ${body.title}\n Price: ${body.price}\n`
  }

  @Put()
  update(){

  }

  @Delete()
  remove(){

  }
}
