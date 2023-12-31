import { BrowserRouter } from 'react-router-dom'
import Router from './Router.tsx'

import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo.ts'

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </>
  )
}

export default App
