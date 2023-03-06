const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs')
const {ApolloServer} = require("apollo-server-express");
const {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault
} = require("apollo-server-core");


const Query = require('./resolvers/Query')
const resolvers = {Query}
const typeDefs = fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
)
const context = ({req}) => ({
    locale: req?.headers?.locale || 'en-us'
})

async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app)
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context,
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
            ApolloServerPluginDrainHttpServer({httpServer}),
            ApolloServerPluginLandingPageLocalDefault({embed: true})
        ]
    });
    await server.start();
    server.applyMiddleware({app})

    app.use(express.static(path.join(__dirname, '../../eneyida', 'build')));
    app.use(express.static('public'))

    app.get('/rest', function (req, res) {
        res.json({data: 'rest work'})
    })

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../../eneyida', 'build', 'index.html'))
    })

    await new Promise(res => httpServer.listen({port: process.env.PORT || 4000}, res))
    console.log(`yo yo --- ${server.graphqlPath}`)
}

startApolloServer(typeDefs, resolvers)

