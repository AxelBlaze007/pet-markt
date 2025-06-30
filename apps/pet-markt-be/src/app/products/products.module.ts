import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { ProductResolver } from './product.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [ProductsResolver, ProductsService,ProductResolver],
  imports:[PrismaModule]
})
export class ProductsModule {}
