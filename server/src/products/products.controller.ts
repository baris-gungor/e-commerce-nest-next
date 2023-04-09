import {
  Body,
  Controller,
  Query,
  Delete,
  Get,
  HttpCode,
  Post,
} from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('get-products')
  async getTodo() {
    return await this.productsService.getProducts();
  }
}
