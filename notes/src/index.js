import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

import { ApolloProvider, createBatchingNetworkInterface } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({ uri: 'http://localhost:8000/graphql' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


// const networkInterface = createBatchingNetworkInterface({
//   uri: 'http://localhost:8000/graphql',
//   batchInterval: 10,
//   opts: {
//     credentials: 'same-origin',
//   },
// })

// networkInterface.use([
//   {
//     applyBatchMiddleware(req, next) {
//       if (!req.options.headers) {
//         req.options.headers = {}
//       }

//       const token = localStorage.getItem('token')
//         ? localStorage.getItem('token')
//         : null
//       req.options.headers['authorization'] = `JWT ${token}`
//       next()
//     },
//   },
// ])

// const client = new ApolloClient({
//   networkInterface: networkInterface,
// });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root')
)
