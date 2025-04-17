import express from 'express';
import { getAllCountries, getCountryByName } from '../controllers/countryController.js';

const router = express.Router();

router.get('/countries', getAllCountries); // Get all countries
router.get('/countries/:name', getCountryByName); // Get country by name

export default router;
