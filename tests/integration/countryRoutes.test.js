import request from 'supertest';
import express from 'express';
import countryRoutes from '../../routes/countryRoutes.js';

const app = express();
app.use(express.json());
app.use('/', countryRoutes);

test('GET /countries should return list of countries', async () => {
  const res = await request(app).get('/countries');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test('GET /countries/Canada should return details of Canada', async () => {
  const res = await request(app).get('/countries/Canada');
  expect(res.statusCode).toBe(200);
  expect(res.body.name).toBe('Canada');
});
