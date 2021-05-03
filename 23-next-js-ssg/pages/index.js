import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { gql } from '@apollo/client';
import { gqlClient } from '../src/modules/gql-client';

export default function Home({ name, libraries }) {
  console.log(libraries);

  return (
    <div>
      <Head>
        <title>Libraries service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello, {name}</h1>

        <ol>
          {libraries.map(library => (
            <li key={library.id}>
              <h2>{library.name}</h2>
              <span>Books:</span>
              <ol>
                {library.books.map(book => (
                  <li key={book.id}>
                    <Link href={`/books/${book.id}`}>
                      {book.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </main>

      <footer>
        Powered by <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await gqlClient.query({
    query: gql`
      query {
        libraries {
          id
          name
          books {
            id
            title
          }
        }
      }
    `,
  });

  console.log(data);

  return {
    props: {
      libraries: data.libraries,
      name: 'TPolis'
    }
  }
}
