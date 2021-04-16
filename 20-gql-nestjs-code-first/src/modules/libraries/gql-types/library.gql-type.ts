import { Field, ObjectType } from '@nestjs/graphql';
import { Book } from './book.gql-type';

@ObjectType()
export class Library {

  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => [Book])
  books: Book[];
}
