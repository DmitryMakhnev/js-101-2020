import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Library } from '../gql-types/library.gql-type';
import { BookModelDataModel, books, libraries, LibraryModelDataModel } from '../../../mocks/data.mocks';
import { Book } from '../gql-types/book.gql-type';

@Resolver(() => Library)
export class LibraryResolver {

  @Query(() => [Library])
  libraries(
    @Args('id', { nullable: true }) libraryId: string,
    @Args('name', { nullable: true }) libraryName: string,
  ): LibraryModelDataModel[] {
    if (libraryId) {
      return [libraries.find(library => library.id === libraryId)];
    }
    if (libraryName) {
      return [libraries.find(library => library.name.includes(libraryName))];
    }
    return libraries;
  }

  @ResolveField(() => [Book])
  books(
    @Parent() currentLibrary: LibraryModelDataModel
  ): BookModelDataModel[] {
    return books.filter(book => currentLibrary.books_ids.includes(book.id));
  }

}
