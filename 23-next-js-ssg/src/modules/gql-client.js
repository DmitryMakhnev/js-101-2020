import { ApolloClient, InMemoryCache } from '@apollo/client';

export const gqlClient = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});
