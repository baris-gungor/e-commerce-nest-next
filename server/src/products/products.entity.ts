import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Repository } from 'typeorm';

export class ProductsRepository extends Repository<Products> {}

@Entity('products')
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The table unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  category: string;

  @Column({
    type: 'varchar',
  })
  sub_category: string;

  @Column({
    type: 'varchar',
  })
  product_name: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'boolean',
    default: 0,
  })
  isStock: boolean;
}
