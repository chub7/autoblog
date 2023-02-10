import {ApolloClient, InMemoryCache} from "@apollo/client";

export const apolloClient =()=> {
    const client = new ApolloClient({
        uri: process.env.STRAPI_API_URL,
        cache: new InMemoryCache()
    });
    return client
}