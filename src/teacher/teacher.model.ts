import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Teacher {
  @Field(() => Int)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;
}
