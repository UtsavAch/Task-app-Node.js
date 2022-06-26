const request = require("supertest");
const app = require("../src/app");

test("Should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Smirti",
      email: "smirti.15.acharya@gmail.com",
      password: "smirti123",
    })
    .expect(201);
});
