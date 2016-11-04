const apiUnderTest = require('../src');
const supertest = require('supertest');

const request = supertest.agent(apiUnderTest.listen());

describe('Hello World', () => {
  it('should say "Hello World"', (done) => {
    request
      .get('/')
      .expect(200)
      .expect('Hello World', done);
  });
});

describe('users', () => {
  it('should insert a new user', (done) => {
    request
      .post('/users')
      .field('username', 'Nicolas')
      .expect(200, done);
  });

  it('should retrieve a user', (done) => {
    request
      .get('/users/1')
      .expect(200, done);
  });
});