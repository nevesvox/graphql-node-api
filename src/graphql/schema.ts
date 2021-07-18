import { makeExecutableSchema } from 'graphql-tools';

const users: any [] = [
  {
    id: 1,
    name: "Teste 1",
    email: "teste1@gmail.com"
  },
  {
    id: 2,
    name: "Teste 2",
    email: "teste2@gmail.com"
  },
  {
    id: 3,
    name: "Teste 3",
    email: "teste3@gmail.com"
  },
  {
    id: 4,
    name: "Teste 4",
    email: "teste4@gmail.com"
  },
  {
    id: 5,
    name: "Teste 5",
    email: "teste5@gmail.com"
  }
]

const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    createUser(
      name: String!,
      email: String!
    ): User
  }
`;

const resolvers = {
  Query: {
    allUsers: () => users
  },
  Mutation: {
    createUser: (parent, args) => {
      // Cria um novo objeto com os parametros recebidos e inclui o ID
      const newUser = Object.assign({ id: users.length + 1 }, args);
      users.push(newUser);

      return newUser;
    }
  }
};

export default makeExecutableSchema({
  typeDefs,
  resolvers
});