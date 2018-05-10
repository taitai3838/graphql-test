import { GraphQLObjectType, GraphQLString, GraphQLFloat } from "graphql";

const productType = new GraphQLObjectType({
  name: "products",
  description: "Detail of The product",
  // ของเดิมเป็น name ปกติ ถ้า schema ถูกเราจะผ่าน อันนี้เทสในกรณี schema ผิด
  fields: () => ({
    namProduct: { type: GraphQLString },
    price: { type: GraphQLFloat }
  })
});

export default productType;
