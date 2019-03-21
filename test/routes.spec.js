const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../index').app; 
const database = require("../queries/connection");

chai.use(chaiHttp);

describe('GET /api/v1/favorites', () => {
  before((done) => {
    database.migrate.latest()
      .then(() => done())
      .catch(error => {
        throw error;
      });
  });

  beforeEach((done) => {
    database.seed.run()
      .then(() => done())
      .catch(error => {
        throw error;
      });
  });

  it('should return all of the favorites', done => {
    chai.request(server)
      .get('/api/v1/favorites')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body[0].should.have.property('name');
        response.body[0].should.have.property('artist_name');
        response.body[0].should.have.property('genre');
        response.body[0].should.have.property('rating');
        done();
      });
  });
});