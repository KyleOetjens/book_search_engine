const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    description: String!
    bookId: ID!
    image: String
    link: String
    title: String!
    authors: [String]
  }
input BookInput {
  description: String!
    bookId: ID!
    image: String
    link: String
    title: String!
    authors: [String]
}
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;
// remember this for the project removeComment(thoughtId: ID!, commentId: ID!): Thought
// addComment(thoughtId: ID!, commentText: String!): Thought
//     removeThought(thoughtId: ID!): Thought
module.exports = typeDefs;