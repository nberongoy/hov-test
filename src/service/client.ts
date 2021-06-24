import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // eslint-disable-next-line array-callback-return
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(message);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://api.spacex.land/graphql" }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
  credentials: "same-origin",
});
