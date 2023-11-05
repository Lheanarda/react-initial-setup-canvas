import { ApolloClient, InMemoryCache } from "@apollo/client";

const webapiEmosClient = new ApolloClient({
  uri: "https://webapi.emos.id/api-emos-lite/graphql/",
  cache: new InMemoryCache(),
});

export default webapiEmosClient;
