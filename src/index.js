import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

// APP
import App from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-matiasb-matibruna.vercel.app/graphql',
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
)
