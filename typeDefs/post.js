const { gql } = require('apollo-server-express')

module.exports = gql`
type Post {
    _id: ID!
    title: String
    imageUrl: String
    slug: String
    content: String
    tags: [String]
}

type Query {
    allPosts(page: Int): [Post!]!
    slugPosts(slug: String): Post!
}

input PostCreate {
    title: String
    imageUrl: String
    slug: String
    content: String
    tags: [String]
}

type Mutation {
    postCreate(input: PostCreate!): Post!
}
`