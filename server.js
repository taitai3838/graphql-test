import express from 'express'
import bodyParser from 'body-parser'
import graphqlHTTP from 'express-graphql'
import MyGraphQLSchema from './src/schema'
const server = express()
const port = 9000;

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: true
}))

server.use('/graphql', graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true
}))

server.listen(port, function (err, result) {
    console.log('running in port http://localhost:' + port)
})

export default server
