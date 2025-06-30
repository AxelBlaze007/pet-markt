import { Query, Resolver } from '@nestjs/graphql';
import { HelloType } from './dto/hello.dts';

@Resolver()
export class ProductResolver {
  @Query(() => HelloType)
  hello() {
    return { message: 'Hello from GraphQL!' };
  }
}
