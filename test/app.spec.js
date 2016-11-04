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