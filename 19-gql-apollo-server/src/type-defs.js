const { gql } = require('apollo-server');

const typeDefs = gql`
    type Author {
        id: String!
        firstName: String!
        middleName: String
        lastName: String
        birthDate: String
        deathDate: String
        books: [Book]
    }

    type Book {
        id: String!
        title: String!
        author: Author
    }

    type Library {
        id: String!,
        name: String!,
        books: [Book]
    }

    type Query {
        authors: [Author]
        books: [Book]
        libraries(id: String, name: String): [Library]
    }

    type Mutation {
        addLibrary(name: String!, bookIds: [String]!): [Library]
        
        setBookTitle(id: String!, title: String!): Book
    }
`;

module.exports = {
  typeDefs
};
