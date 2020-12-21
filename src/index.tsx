import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, HttpLink, from} from '@apollo/client'


const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql'

// TOKEN must have a valid personal token value from Github
// how does this tokem look like: 07c4ffcf0cc9307f0207e51a2f9648699157b83f
// 40 characteres 
const GITHUB_PERSONAL_ACCESS_TOKEN = 'token value'


const httpLink = new HttpLink({uri: GITHUB_GRAPHQL_URL})

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `token ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
    }
  }));
  return forward(operation);
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, httpLink])
});

ReactDOM.render(
  <React.StrictMode>
  <ApolloProvider client={client}>  
    <h1>List of React Repositories</h1>
    <App />
  </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
