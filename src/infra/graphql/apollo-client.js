import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

function httpLink() {
  return new HttpLink({
    uri: process.env.VUE_APP_GRAPHQL_ENDPOINT,
  });
}

export const apolloClient = new ApolloClient({
  link: httpLink(),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
