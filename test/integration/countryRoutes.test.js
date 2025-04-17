import request from 'supertest';
import express from 'express';
import { expect } from 'chai';
import countryRoutes from '../../routes/countryRoutes.js';

const app = express();
app.use(express.json());
app.use('/', countryRoutes);

describe('Country Routes', () => {
  it('GET /countries should return list of countries', async () => {
    const res = await request(app).get('/countries');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('GET /countries/South Africa should return details of South Africa', async () => {
    const res = await request(app).get('/countries/South Africa');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('name', 'South Africa');
  });
});
