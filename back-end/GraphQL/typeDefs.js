const {gql} = require('apollo-server')
module.exports = gql`
type Post {
    id: ID!
    content: String!
    createdAt: String!
    username: String!
    comments:[Comment]!
    commentCount: Int!
  }
type Comment{
    id:ID!
    createdAt: String!
    username: String!
    content: String!
}
type Profile{
    genre: String
    education: String
    profession: String
    phone: String!
    city: String!
    profileCreatedAt: String
    points: String
}
type Query{
 getPosts: [Post]
 getPost(postId: ID!): Post
 getProfiles: [Profile]
 getProfile(user_id: ID!): Profile
}
type Mutation{
    createPost(content: String!): Post
    deletePost(postId: ID!): String!
    createComment(postId: String!, content: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    createProfile(genre: String, education: String, profession: String, phone: String!, city: String!, profileCreatedAt: String, points: String): Profile
    deactivateProfile(user_id: ID!): String!
}
`;