import { fetchAllCountries, fetchCountryDetails } from '../services/countryService.js';

export async function getAllCountries(req, res) {
  try {
    const countries = await fetchAllCountries();
    res.status(200).json(countries);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
}

export async function getCountryByName(req, res) {
  try {
    const country = await fetchCountryDetails(req.params.name);
    if (!country) {
      return res.status(404).json({ error: 'Country not found' });
    }
    res.status(200).json(country);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch country details' });
  }
}
