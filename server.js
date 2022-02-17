const connectDB = require('./config/db'); 
const {ApolloServer} = require('apollo-server')
//connect database
connectDB();

const typeDefs = require('./GraphQL/typeDefs')
const  resolvers = require('./GraphQL/Resolvers/server')


 const server = new ApolloServer({
    typeDefs,
    resolvers
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server started on port ${PORT}`));
