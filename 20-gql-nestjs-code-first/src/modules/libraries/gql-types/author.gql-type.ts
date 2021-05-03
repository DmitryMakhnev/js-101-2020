import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType({ description: "Author of a book" })
export class Author {
  @Field(() => Int)
  id: number;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  middleName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  birthDate: string;

  @Field({ nullable: true })
  deathDate: string;
}
