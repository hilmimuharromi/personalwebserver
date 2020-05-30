const { gql } = require('apollo-server-express');

module.exports = gql`
type Query{
    me: String!
    userLogin(email: String!, password: String): Token!
}
type Token {
    token: String!
}
type User {
    _id: ID!
    email: String
    password: String
}
input UserReg {
    email: String!
    password: String!
}
type Mutation {
    userCreate(input: UserReg): User!
}
`