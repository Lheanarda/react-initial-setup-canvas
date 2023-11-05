import { ApolloClient, InMemoryCache } from "@apollo/client";

const emosidClient = new ApolloClient({
  uri: "https://www.emos.id:501/graphql/",
  cache: new InMemoryCache(),
});

export default emosidClient;
