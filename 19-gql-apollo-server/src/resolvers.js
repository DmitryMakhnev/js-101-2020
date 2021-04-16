const { libraries, books, authors } = require('./mocks/data');

const resolvers = {
  Query: {
    libraries: (parent, args) => {
      const libraryId = args.id;
      if (libraryId) {
        return [libraries.find(library => library.id === libraryId)];
      }

      const name = args.name;
      if (name) {
        return [libraries.find(library => library.name.includes(name))];
      }

      return libraries;
    },

    books: () => books,
    authors: () => authors
  },

  Library: {
    books: parentLibrary => {
      return Promise.resolve(
        books.filter(book => parentLibrary.books_ids.includes(book.id))
      );
    }
  },

  Book: {
    author: parentBook => {
      return authors.find(author => parentBook.author_id === author.id);
    }
  },

  Author: {
    books: parentAuthor => {
      return books.filter(book => book.author_id.includes(parentAuthor.id));
    }
  },

  Mutation: {
    addLibrary(_, { name, bookIds }) {
      const newLibrary = {
        id: (parseInt(libraries[libraries.length - 1].id, 10) + 1).toString(10),
        name,
        books_ids: bookIds
      };
      libraries.push(newLibrary);
      return libraries;
    }
  }
};

module.exports = {
  resolvers
};
