const { ApolloServer } = require('apollo-server');

const { typeDefs } = require('./type-defs');
const { resolvers } = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
