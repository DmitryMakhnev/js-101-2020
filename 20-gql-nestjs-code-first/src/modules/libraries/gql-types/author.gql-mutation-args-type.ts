import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class AuthorGqlMutationArgsType {
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
