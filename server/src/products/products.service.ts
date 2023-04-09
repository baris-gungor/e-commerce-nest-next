import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly produtcsRepository: Repository<Products>,
  ) {}
  public async getProducts() {
    return await this.produtcsRepository.find();
  }
}
