import { Module } from '@nestjs/common';
import { AuthorResolver } from './resolvers/author.resolver';
import { BookResolver } from './resolvers/book.resolver';
import { LibraryResolver } from './resolvers/library.resolver';

@Module({
  providers: [
    AuthorResolver,
    BookResolver,
    LibraryResolver
  ]
})
export class LibrariesModule {

}
