import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clpebswsshptq01uih9yqd9c8/master',
  cache: new InMemoryCache(),
})
