import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class AuthorGqlQueryArgsType {
  @Field(() => Int, { nullable: true })
  id: number;
}
