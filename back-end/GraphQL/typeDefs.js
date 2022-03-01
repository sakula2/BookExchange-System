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
    first_name: String!
    last_name: String!
    email: String!
    phone: String
    city: String!
    country: String
    exchange_points: String
    created_at: String
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
    createProfile(user_id:ID, first_name: String!, last_name: String!, email: String!, phone: String!, city: String!, country: String!): Profile
    deactivateProfile(user_id: ID!): String!
}
`;