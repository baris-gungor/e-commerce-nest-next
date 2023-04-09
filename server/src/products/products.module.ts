import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Products, ProductsRepository } from './products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsRepository, Products])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
