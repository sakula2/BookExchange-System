const postsResolvers = require('./posts')
const usersResolvers = require('./users')
const commentsResolvers = require('./comments')
const profilesResolvers = require('./profiles')
module.exports={
    Post:{
    commentCount: (parent) => parent.comments.length

    },
    Query:{
        ...postsResolvers.Query,
        ...profilesResolvers.Query
    },
    Mutation:{
        ...postsResolvers.Mutation,
        ...commentsResolvers.Mutation,
        ...profilesResolvers.Mutation
    }

};