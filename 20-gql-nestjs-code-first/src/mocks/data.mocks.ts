
export type AuthorModelDataModel = {
  id: number;
  firstName: string;
  middleName?: string;
  lastName?: string,
  birthDate?: string,
  deathDate?: string;
}

export const authors: AuthorModelDataModel[] = [
  {
    id: 1,
    firstName: "Lev",
    middleName: "Nikolayevich",
    lastName: "Tolstoy",
    birthDate: "1828-09-09T00:00:00.000Z",
    deathDate: "1910-11-20T00:00:00.000Z"
  },
  {
    id: 2,
    firstName: "Nikolai",
    middleName: "Vasilyevich",
    lastName: "Gogol",
    birthDate: "1809-04-01T00:00:00.000Z",
    deathDate: "1852-02-21T00:00:00.000Z"
  },
  {
    id: 3,
    firstName: "Alexander",
    middleName: "Sergeyevich",
    lastName: "Pushkin",
    birthDate: "1799-05-26T00:00:00.000Z",
    deathDate: "1837-01-29T00:00:00.000Z"
  },
]

export type BookModelDataModel = {
  id: string;
  title: string;
  author_id: number;
  publicationDate: string;
};

export const books: BookModelDataModel[] = [
  {
    id: "1",
    title: "War and Peace",
    author_id: 1,
    publicationDate: "1869-01-01T00:00:00.000Z"
  },
  {
    id: "2",
    title: "Anna Karenina",
    author_id: 1,
    publicationDate: "1878-01-01T00:00:00.000Z"
  },
  {
    id: "3",
    title: "Taras Bulba",
    author_id: 2,
    publicationDate: "1835-01-01T00:00:00.000Z"
  },
  {
    id: "4",
    title: "Eugene Onegin",
    author_id: 3,
    publicationDate: "1833-01-01T00:00:00.000Z"
  },
  {
    id: "5",
    title: "Ruslan and Ludmila",
    author_id: 3,
    publicationDate: "1820-01-01T00:00:00.000Z"
  }
];

export type LibraryModelDataModel = {
  id: string;
  name: string;
  books_ids: string[];
};

export const libraries: LibraryModelDataModel[] = [
  {
    id: "1",
    name: "The Great Library",
    books_ids: ["1", "2", "3"]
  },
  {
    id: "2",
    name: "Pushkinskaya Library",
    books_ids: ["4", "5"]
  }
];
