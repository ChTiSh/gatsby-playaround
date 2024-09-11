import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',  // Pokémon API
  cache: new InMemoryCache(),
});