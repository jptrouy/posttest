import React from 'react'
import {createRoot} from 'react-dom/client'
import './tailwind.css'

import './index.css'
import App from './components/App'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


const link = createHttpLink({ uri: 'http://localhost:5000/graphql' })
const client = new ApolloClient({ link: link, cache: new InMemoryCache() })
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
