const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");
const server = require("../index").app;
const database = require("../queries/connection");
const postIndividual = require("queries/favorites/postIndividual");
const getIndividual = require("queries/favorites/getIndividual");

chai.use(chaiHttp);

describe("GET /api/v1/favorites", () => {
  before(async () => {
    await database.seed.run();
  });

  it("should return all of the favorites", done => {
    chai
      .request(server)
      .get("/api/v1/favorites")
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a("array");
        response.body[0].should.have.property("name");
        response.body[0].should.have.property("artist_name");
        response.body[0].should.have.property("genre");
        response.body[0].should.have.property("rating");
        done();
      });
  });

  it("should return a favorite", async () => {
    const newFavoriteIds = await postIndividual({
      name: "foo",
      artist_name: "bar",
      genre: "rock",
      rating: 89
    }).returning("id");
    const id = newFavoriteIds[0];
    const response = await chai.request(server).get(`/api/v1/favorites/${id}`);
    response.should.have.status(200);
    response.should.be.json;
    const json = response.body;
    json.name.should.eq("foo");
    json.artist_name.should.eq("bar");
    json.genre.should.eq("rock");
    json.rating.should.eq(89);
  });
});

it("should edit a favorite", async () => {
  const newFavoriteIds = await postIndividual({
    name: "new_foo",
    artist_name: "new_bar",
    genre: "rap",
    rating: 99
  }).returning("id");
  const id = newFavoriteIds[0];

  const new_response = await chai
    .request(server)
    .put(`/api/v1/favorites/${id}`)
    .send({
      name: "super_new_foo",
      artist_name: "super_new_bar",
      genre: "jazz",
      rating: 100
    });
  new_response.should.have.status(200);
  const updatedFavorite = (await getIndividual(id))[0];
  updatedFavorite.name.should.eq("super_new_foo");
  updatedFavorite.artist_name.should.eq("super_new_bar");
  updatedFavorite.genre.should.eq("jazz");
  updatedFavorite.rating.should.eq(100);
});

it("should delete a favorite", async () => {
  const newFavoriteIds = await postIndividual({
    name: "new_foo",
    artist_name: "new_bar",
    genre: "rap",
    rating: 99
  }).returning("id");
  const id = newFavoriteIds[0];

  const new_response = await chai
    .request(server)
    .delete(`/api/v1/favorites/${id}`);

  new_response.should.have.status(204);
  const deletedFavorite = (await getIndividual(id))[0];
  (deletedFavorite === undefined).should.eq(true);
});
