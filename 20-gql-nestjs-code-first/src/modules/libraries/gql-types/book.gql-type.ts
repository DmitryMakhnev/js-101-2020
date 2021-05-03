import { Field, ObjectType } from '@nestjs/graphql';
import { Author } from './author.gql-type';

@ObjectType()
export class Book {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field(() => Author)
  author: Author
}
