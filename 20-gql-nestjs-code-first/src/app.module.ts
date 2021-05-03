import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { LibrariesModule } from './modules/libraries/libraries.module';

@Module({
  imports: [
    LibrariesModule,
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ]
})
export class AppModule {}
