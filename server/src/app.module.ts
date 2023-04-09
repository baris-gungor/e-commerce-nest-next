import { Module } from '@nestjs/common';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'vue-ui/dist'),
    // }),
    ProductsModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
})
export class AppModule {}
