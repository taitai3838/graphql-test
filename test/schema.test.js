import request from "supertest";
import server from "../server";

server.listen();

describe("Testing Schema GraphQL", () => {
  it("เมื่อ schema ถูกต้องจะต้องไดฟิวตามที่ต้องการ", done => {
    const query = {
      query: `{
                    getProducts {
                        name
                        price
                      }
                    }
                `
    };

    request(server)
      .post("/graphql")
      .send(query)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.data).toHaveProperty("getProducts");
        expect(res.body.data.getProducts[0]).toHaveProperty("name");
        expect(res.body.data.getProducts[0]).toHaveProperty("price");
        done();
      });
  });
});
