import express from 'express';
import { getAllCountries, getCountryByName } from '../controllers/countryController.js';

const router = express.Router();

router.get('/countries', getAllCountries);
router.get('/countries/:name', getCountryByName);

export default router;
