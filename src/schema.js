import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import getProducts from './product/query'

const queryType = new GraphQLObjectType({
    name: "queryProduct",
    description: "query of product",
    fields: () => ({
        getProducts
    })
})

const MyGraphQLSchema = new GraphQLSchema({
    query: queryType
})

export default MyGraphQLSchema