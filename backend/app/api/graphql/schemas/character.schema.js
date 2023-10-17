const { gql } = require("apollo-server-express");

const typeDefs = gql `
type Book {
  id: ID!
  title: String!
  author: String!
}

type Query {
  books: [Book]
}
`;


/* type Query {
  characters: [Character]
}

type Character{
  id: ID!
  name: String!
  species: String!
}  */
module.exports = {
  typeDefs
}