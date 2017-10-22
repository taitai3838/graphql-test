import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat
} from 'graphql'


const productType = new GraphQLObjectType({
    name: "products",
    description: "Detail of The product",
    fields: () => ({
        name: { type: GraphQLString },
        price: { type: GraphQLFloat },
    })
})

export default productType