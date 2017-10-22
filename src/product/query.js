import { GraphQLList } from 'graphql'
import productType from './input'
import data from './data.json'

const getProducts = {
    type: new GraphQLList(productType),
    resolve: function (_, args) {
        return data.products
    }
}

export default getProducts
