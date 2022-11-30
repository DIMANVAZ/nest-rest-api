/* eslint-disable*/
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsService } from "./products.service";

@Controller('products') // будет доступен по /products/
export class ProductsController {

  constructor(private readonly productsService: ProductsService) {
  }

  @Get()
  getAll(): Array<any> {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return this.productsService.getById(id);
  }

  @Post()
  create(@Body() body:CreateProductDto): void{
    return this.productsService.create(body);
  }

  @Put(':id')
  update(@Body() body:UpdateProductDto, @Param('id') id: string){
    return `Updated product:\n id: ${id} ${body.title} ${body.price}\n`;
  }

  @Delete(':id')
  remove(@Param('id') id: string){
    return `Deleted product:\n id: ${id}`;
  }
}
