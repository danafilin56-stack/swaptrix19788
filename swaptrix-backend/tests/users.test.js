const request = require('supertest');
const app = require('../server');

describe('Swaptrix Users API', () => {
  it('should get users list', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});