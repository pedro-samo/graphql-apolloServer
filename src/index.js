import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String!
      age: Int!
      average: Float
      married: Boolean!
      arrayString: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => 1,
      name: () => 'Pedro',
      age: () => 30,
      average: () => 12.3,
      married: () => false,
      arrayString: () => [null],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
