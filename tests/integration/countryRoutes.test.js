import request from 'supertest';
import express from 'express';
import countryRoutes from '../../routes/countryRoutes.js';

const app = express();
app.use(express.json());
app.use('/api', countryRoutes);

test('GET /api/countries should return list of countries', async () => {
  const res = await request(app).get('/api/countries');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test('GET /api/countries/Canada should return details of Canada', async () => {
  const res = await request(app).get('/api/countries/Canada');
  expect(res.statusCode).toBe(200);
  expect(res.body.name).toBe('Canada');
});
