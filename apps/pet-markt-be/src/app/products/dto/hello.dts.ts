import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class HelloType {
  @Field()
  message: string;
}
