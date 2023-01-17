const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core')

const typeDefs = `
    type Query {
        hello: String
        getPerson(name:String, age: Int): String
        getInt(age: Int): Int
        getFloat(price: Float): Float
        getString: String
        getBoolean: Boolean
        getID: ID
    }
`;

const resolvers = {
    Query: {
        hello: () => 'hola mundo',
        getPerson: (_, args) => `Hello, my name is ${args.name}. I'm ${args.age} years old`,
        getInt: (_, args) => args.age,
        getFloat: (_, args) => args.price,
        getString: () => 'Palabra',
        getBoolean: ()=> true,
        getID: () => '12345'
    }
}

const useGraphql = async (app) => {
    const server = new ApolloServer({
        typeDefs, 
        resolvers,
        playground : true,
        plugins: [ ApolloServerPluginLandingPageLocalDefault ]
    });
    await server.start();
    server.applyMiddleware({ app })
}

module.exports = useGraphql