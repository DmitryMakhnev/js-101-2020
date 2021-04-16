import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Author } from '../gql-types/author.gql-type';

import { AuthorModelDataModel, authors } from '../../../mocks/data.mocks';
import { AuthorGqlQueryArgsType } from '../gql-types/author.gql-query-args-type';
import { AuthorGqlMutationArgsType } from '../gql-types/author.gql-mutation-args-type';

@Resolver(() => Author)
export class AuthorResolver {

  @Query(() => [Author])
  authors(
    @Args() queryArgs: AuthorGqlQueryArgsType
  ): AuthorModelDataModel[] {
    if (queryArgs && queryArgs.id) {
      return [authors.find(author => author.id === queryArgs.id)];
    }
    return authors;
  }

  @Query(() => Author, { nullable: true })
  author(
    @Args('id', { type: () => Int }) authorId: number
  ): AuthorModelDataModel {
    return authors.find(author => author.id === authorId);
  }

  @Mutation(() => Author)
  addAuthor(
    @Args() mutationArgs: AuthorGqlMutationArgsType
  ): AuthorModelDataModel {
    const lastAuthor = authors[authors.length - 1];
    const newId = lastAuthor.id + 1;
    const newAuthor: AuthorModelDataModel = {
      id: newId,
      ...mutationArgs
    };
    authors.push(newAuthor);
    return newAuthor;
  }
}
